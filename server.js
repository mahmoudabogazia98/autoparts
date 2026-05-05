const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5003;

// --- Security Middleware ---
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "script-src": ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"],
            "img-src": ["'self'", "data:", "https:*"],
            "font-src": ["'self'", "https:", "data:"],
            "connect-src": ["'self'", "*", "http://localhost:*", "http://127.0.0.1:*"],
        },
    },
}));

// Rate Limiting: Prevent brute force (Relaxed to 500 requests per 15 minutes)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 500, // Increased from 100 to allow for more development/usage flexibility
    message: { 
        error: 'Too many requests from this IP, please try again after 15 minutes',
        message_ar: 'طلبات كثيرة جداً، يرجى المحاولة مرة أخرى بعد 15 دقيقة'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', limiter);

// Additional Logging Middleware
app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
        console.log(`[API REQUEST] ${req.method} ${req.path} - ${new Date().toISOString()}`);
    }
    next();
});

// Additional Security Headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Simple Input Sanitization Middleware
const sanitizeInput = (req, res, next) => {
    if (req.body) {
        for (let key in req.body) {
            if (typeof req.body[key] === 'string') {
                // Remove potential script tags and basic XSS
                req.body[key] = req.body[key].replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gmi, "");
                req.body[key] = req.body[key].replace(/on\w+="[^"]*"/gmi, "");
            }
        }
    }
    next();
};
app.use(sanitizeInput);

// Request Logging Middleware
app.use((req, res, next) => {
    console.log(`[DEBUG] ${new Date().toISOString()} - ${req.method} ${req.originalUrl || req.url}`);
    next();
});

// --- MySQL Connection Configuration ---
const dbConfig = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '123456789',
    database: process.env.DB_NAME || 'autoparts_final_db'
};

const db = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 1, // Reduced to 1 to be absolutely safe with serverless scaling on a 5-connection limit host
    queueLimit: 0,
    multipleStatements: true,
    connectTimeout: 10000, 
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
    ssl: {
        rejectUnauthorized: false 
    }
});

// Pool connection error handling
db.on('connection', (connection) => {
    console.log('[Pool] New connection established');
});

db.on('release', (connection) => {
    // console.log('[Pool] Connection released');
});

db.on('error', (err) => {
    console.error('[Pool Error]:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('[Pool Error] Connection was closed.');
    } else if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('[Pool Error] Too many connections.');
    } else if (err.code === 'ECONNREFUSED') {
        console.error('[Pool Error] Connection refused.');
    }
});

// Initialize Database Tables and Indexes
const initializeDB = async () => {
    let connection;
    try {
        console.log(`Connecting to MySQL Database: ${dbConfig.database}...`);
        connection = await db.promise().getConnection();
        console.log(`Successfully connected to Database: ${dbConfig.database}`);

        // --- Create Tables ONLY if they don't exist ---
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                profile_image LONGTEXT,
                bio TEXT,
                phone VARCHAR(50),
                address VARCHAR(255),
                upload_count_today INT DEFAULT 0,
                total_sold INT DEFAULT 0,
                last_upload_date DATE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                INDEX idx_email (email),
                INDEX idx_phone (phone)
            )
        `);

        // Create Ratings Table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS ratings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                seller_id INT NOT NULL,
                buyer_id INT NOT NULL,
                rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
                comment TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE CASCADE,
                UNIQUE KEY unique_rating (seller_id, buyer_id)
            )
        `);

        // Create Products Table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                name_en VARCHAR(255) NOT NULL,
                name_ar VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                contact VARCHAR(50) NOT NULL,
                category VARCHAR(50) DEFAULT 'all',
                \`condition\` VARCHAR(50) DEFAULT 'New',
                location VARCHAR(255) DEFAULT 'Cairo',
                seller_name VARCHAR(255) DEFAULT 'Guest',
                date DATE NOT NULL,
                image LONGTEXT NOT NULL,
                isNew BOOLEAN DEFAULT 0,
                status VARCHAR(20) DEFAULT 'available',
                sold_at DATETIME DEFAULT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                INDEX idx_status_date (status, date),
                INDEX idx_user_id (user_id),
                INDEX idx_category (category)
            )
        `);

        // Create Sold History Table (Archive)
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sold_history (
                id INT PRIMARY KEY,
                user_id INT,
                name_en VARCHAR(255) NOT NULL,
                name_ar VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                contact VARCHAR(50) NOT NULL,
                category VARCHAR(50) DEFAULT 'all',
                \`condition\` VARCHAR(50) DEFAULT 'New',
                location VARCHAR(255) DEFAULT 'Cairo',
                seller_name VARCHAR(255) DEFAULT 'Guest',
                date DATE NOT NULL,
                image LONGTEXT NOT NULL,
                isNew BOOLEAN DEFAULT 0,
                status VARCHAR(20) DEFAULT 'sold',
                sold_at DATETIME DEFAULT NULL,
                archived_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                INDEX idx_user_id (user_id)
            )
        `);

        // Create Favorites Table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS favorites (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                product_id INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
                UNIQUE KEY unique_fav (user_id, product_id)
            )
        `);

        // Create Requests Table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS requests (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT,
                part_name VARCHAR(255) NOT NULL,
                category VARCHAR(50) DEFAULT 'other',
                location VARCHAR(100),
                details TEXT,
                phone VARCHAR(50),
                image LONGTEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);

        // --- Data Cleanup: Delete items without images ---
        console.log('[Database Cleanup] Deleting products and requests without images...');
        await connection.query("DELETE FROM products WHERE image IS NULL OR image = '' OR image = 'null'");
        await connection.query("DELETE FROM requests WHERE image IS NULL OR image = '' OR image = 'null'");
        await connection.query("DELETE FROM sold_history WHERE image IS NULL OR image = '' OR image = 'null'");
        console.log('[Database Cleanup] Cleanup completed.');

        console.log('Database Schema Re-initialized Successfully.');
    } catch (err) {
        console.error('Database Initialization Error:', err.message);
    } finally {
        if (connection) connection.release();
    }
};

// Call initialization but don't await it at top level to avoid Vercel timeout
initializeDB().catch(err => console.error('Startup Error:', err));

// --- Background Task: Archive Sold Products ---
// This task runs every hour and moves sold products older than 47 hours to sold_history table
const archiveOldSoldProducts = async () => {
    console.log('[Background Task] Checking for old sold products to archive...');
    let connection;
    try {
        connection = await db.promise().getConnection();
        await connection.beginTransaction(); // Use Transaction for safety

        // 1. Get products to archive
        const [toArchive] = await connection.query(`
            SELECT * FROM products 
            WHERE status = 'sold' 
            AND sold_at < DATE_SUB(NOW(), INTERVAL 47 HOUR)
        `);

        if (toArchive.length > 0) {
            console.log(`[Background Task] Archiving ${toArchive.length} products...`);
            
            for (const p of toArchive) {
                // 2. Insert into sold_history
                await connection.query(`
                    INSERT IGNORE INTO sold_history 
                    (id, user_id, name_en, name_ar, price, contact, category, \`condition\`, location, seller_name, date, image, isNew, status, sold_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [p.id, p.user_id, p.name_en, p.name_ar, p.price, p.contact, p.category, p.condition, p.location, p.seller_name, p.date, p.image, p.isNew, p.status, p.sold_at]);

                // 3. Delete from products
                await connection.query('DELETE FROM products WHERE id = ?', [p.id]);
            }
            await connection.commit();
            console.log(`[Background Task] Successfully archived ${toArchive.length} products.`);
        } else {
            await connection.rollback();
            console.log('[Background Task] No products to archive.');
        }
    } catch (err) {
        if (connection) await connection.rollback();
        console.error('[Background Task Error]:', err);
    } finally {
        if (connection) connection.release();
    }
};

// Run archiving task immediately on start and then every hour
archiveOldSoldProducts();
setInterval(archiveOldSoldProducts, 60 * 60 * 1000); // 1 hour interval

// Simple Rate Limiter for Auth Routes
const loginAttempts = new Map();
const authRateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    const limit = 5; // 5 attempts
    const windowMs = 15 * 60 * 1000; // 15 minutes

    if (!loginAttempts.has(ip)) {
        loginAttempts.set(ip, { count: 1, firstAttempt: now });
        return next();
    }

    const attempts = loginAttempts.get(ip);
    if (now - attempts.firstAttempt > windowMs) {
        loginAttempts.set(ip, { count: 1, firstAttempt: now });
        return next();
    }

    attempts.count++;
    if (attempts.count > limit) {
        return res.status(429).json({ error: 'Too many attempts. Please try again in 15 minutes.' });
    }

    next();
};

// --- Auth Endpoints ---

app.get('/api/users/me/:id', async (req, res) => {
    const userId = req.params.id;
    // Get local date in YYYY-MM-DD format (timezone-agnostic for the server)
    const today = new Date().toLocaleDateString('en-CA'); 
    
    try {
        const [rows] = await db.promise().query(
            'SELECT id, full_name, email, profile_image, bio, phone, address, total_sold, upload_count_today, last_upload_date FROM users WHERE id = ?',
            [userId]
        );
        
        if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
        
        let user = rows[0];
        // Format last_upload_date to YYYY-MM-DD string without timezone conversion
        let lastDateStr = '';
        if (user.last_upload_date) {
            const d = new Date(user.last_upload_date);
            lastDateStr = d.toLocaleDateString('en-CA');
        }
        
        console.log(`[Limit Sync Check] User: ${userId}, Server Today: ${today}, Last Upload: ${lastDateStr}, DB Count: ${user.upload_count_today}`);

        if (lastDateStr !== today) {
            console.log(`[Limit Sync Check] Resetting count for user ${userId} (New Day).`);
            user.upload_count_today = 0;
            user.last_upload_date = today;
            await db.promise().query('UPDATE users SET upload_count_today = 0, last_upload_date = ? WHERE id = ?', [today, userId]);
        }
        
        res.json(user);
    } catch (err) {
        console.error('[Limit Sync Error]:', err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/register', authRateLimiter, async (req, res) => {
    try {
        const { full_name, email, password, phone, address } = req.body;
        
        console.log(`[REGISTER] Request body:`, { full_name, email, phone, address });

        if (!full_name || !email || !password || !phone) {
            console.log('[REGISTER] Missing fields');
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 1. Check if email exists
        const [emailRows] = await db.promise().query('SELECT id FROM users WHERE email = ?', [email.trim()]);
        if (emailRows.length > 0) {
            console.log(`[REGISTER] Email already exists: ${email}`);
            return res.status(400).json({ 
                error: 'Email already exists',
                message_ar: 'هذا البريد الإلكتروني مسجل بالفعل! جرب تسجيل الدخول.',
                message_en: 'This email is already registered! Try logging in.'
            });
        }

        // 2. Check phone limit
        const [phoneRows] = await db.promise().query('SELECT id FROM users WHERE phone = ?', [phone]);
        if (phoneRows.length >= 2) {
            console.log(`[REGISTER] Phone limit reached for: ${phone}`);
            return res.status(400).json({ 
                error: 'Phone limit reached', 
                message_ar: 'عذراً، هذا الرقم مسجل به حسابين بالفعل. لا يمكن إنشاء أكثر من حسابين بنفس الرقم.',
                message_en: 'Sorry, this phone number is already linked to 2 accounts. Max 2 accounts per phone allowed.'
            });
        }

        console.log('[REGISTER] Hashing password...');
        const hashedPassword = await bcrypt.hash(password, 10);
        
        console.log('[REGISTER] Inserting user into DB...');
        const query = 'INSERT INTO users (full_name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)';
        const [result] = await db.promise().query(query, [full_name, email, hashedPassword, phone, address || 'Cairo']);
        
        console.log(`[REGISTER SUCCESS] User ID: ${result.insertId}`);
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
        console.error(`[REGISTER ERROR]:`, err);
        res.status(500).json({ 
            error: 'Internal Server Error',
            message: err.message 
        });
    }
});

app.post('/api/login', authRateLimiter, (req, res) => {
    const { email, password } = req.body;
    console.log(`[LOGIN ATTEMPT] Email: ${email}`);
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error(`[LOGIN DB ERROR] for ${email}:`, err.message);
            return res.status(500).json({ error: 'Database error occurred' });
        }
        
        if (results.length === 0) {
            console.log(`[LOGIN FAILED] User not found: ${email}`);
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        const user = results[0];
        try {
            console.log(`[LOGIN] User found in DB. Comparing passwords...`);
            // Add trimming for comparison just in case, but bcrypt handles the raw string
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (!isMatch) {
                console.log(`[LOGIN FAILED] Password mismatch for: ${email}`);
                // Debug (REMOVE IN PRODUCTION): console.log(`Input: "${password}", Stored Hash: "${user.password}"`);
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            
            console.log(`[LOGIN SUCCESS] User: ${email}, ID: ${user.id}`);
            res.json({ 
                message: 'Login successful', 
                user: { 
                    id: user.id,
                    full_name: user.full_name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    total_sold: user.total_sold,
                    profile_image: user.profile_image,
                    bio: user.bio,
                    upload_count_today: user.upload_count_today,
                    last_upload_date: user.last_upload_date
                } 
            });
        } catch (bcryptErr) {
            console.error(`[LOGIN BCRYPT ERROR] for ${email}:`, bcryptErr.message);
            res.status(500).json({ error: 'Error validating password' });
        }
    });
});

app.put('/api/users/:id', (req, res) => {
    const { full_name, bio, phone, profile_image, userId: requesterId } = req.body;
    const userId = req.params.id;

    console.log(`[Profile Update] Request for ID: ${userId}`);

    if (parseInt(userId) !== parseInt(requesterId)) {
        return res.status(403).json({ error: 'Unauthorized profile update' });
    }

    // 1. Get current data from DB (Address is NOT updated here anymore)
    db.query('SELECT phone FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'User not found' });

        const dbUser = results[0];
        
        // Lock phone if set
        const isDbPhoneSet = dbUser.phone && String(dbUser.phone).trim() !== "" && String(dbUser.phone).toLowerCase() !== "null";
        const finalPhone = isDbPhoneSet ? dbUser.phone : (phone || null);

        // NOTICE: Address is NOT in the UPDATE query below.
        const query = 'UPDATE users SET full_name = ?, bio = ?, phone = ?, profile_image = ? WHERE id = ?';
        db.query(query, [full_name, bio, finalPhone, profile_image, userId], (err, updateResult) => {
            if (err) {
                console.error(`[Profile Update DB Error]:`, err.message);
                return res.status(500).json({ error: err.message });
            }
            
            // Return fresh data (including address from registration)
            db.query('SELECT id, full_name, email, profile_image, bio, phone, address, total_sold, upload_count_today, last_upload_date FROM users WHERE id = ?', [userId], (err, userRows) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: 'Profile updated successfully', user: userRows[0] });
            });
        });
    });
});

// --- API Endpoints ---

app.get('/api/products', (req, res) => {
    // Return all available products + sold products that were sold less than 47 hours ago
    const query = `
        SELECT * FROM products 
        WHERE status = 'available' 
        OR (status = 'sold' AND sold_at > DATE_SUB(NOW(), INTERVAL 47 HOUR))
        ORDER BY date DESC
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/api/products', async (req, res) => {
    const p = req.body;
    const userId = p.user_id;
    const today = new Date().toLocaleDateString('en-CA');

    // Basic Input Validation
    if (!p.name_en || !p.price || !p.image) {
        return res.status(400).json({ error: 'Missing required product fields' });
    }

    if (p.name_en.length > 100 || (p.name_ar && p.name_ar.length > 100)) {
        return res.status(400).json({ error: 'Product name too long (max 100 chars)' });
    }

    if (isNaN(p.price) || p.price < 0 || p.price > 1000000) {
        return res.status(400).json({ error: 'Invalid price range' });
    }

    try {
        // 1. Fetch User Data (The Source of Truth for contact/location)
        const [userRows] = await db.promise().query(
            'SELECT full_name, phone, address, upload_count_today, last_upload_date FROM users WHERE id = ?', 
            [userId]
        );

        if (userRows.length === 0) return res.status(404).json({ error: 'User not found' });

        const userData = userRows[0];
        let { upload_count_today, last_upload_date } = userData;
        
        // Check Daily Limit
        let lastDateStr = '';
        if (last_upload_date) {
            const d = new Date(last_upload_date);
            lastDateStr = d.toLocaleDateString('en-CA');
        }

        if (lastDateStr !== today) {
            upload_count_today = 0;
        }

        if (upload_count_today >= 2) {
            return res.status(403).json({ 
                error: 'Daily limit reached', 
                message: 'لقد وصلت للحد الأقصى من المنتجات اليوم (منتجان فقط).' 
            });
        }
        
        // 2. Insert Product using user's REGISTERED data
        const query = 'INSERT INTO products (user_id, name_en, name_ar, price, contact, category, \`condition\`, location, seller_name, date, image, isNew, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            userId, 
            p.name_en, 
            p.name_ar || p.name_en, 
            p.price, 
            userData.phone, // ALWAYS use registered phone
            p.category || 'all', 
            p.condition || 'New', 
            userData.address || 'Cairo', // Default to Cairo if address is null
            userData.full_name, // ALWAYS use registered name
            p.date, 
            p.image, 
            p.isNew ? 1 : 0, 
            'available'
        ];
        
        const [result] = await db.promise().query(query, values);

        // 3. Update User Upload Count
        const newCount = upload_count_today + 1;
        await db.promise().query(
            'UPDATE users SET upload_count_today = ?, last_upload_date = ? WHERE id = ?',
            [newCount, today, userId]
        );

        console.log(`✅ Product added successfully with user's registered info. Address: ${userData.address}`);
        res.status(201).json({ 
            message: 'Product added successfully', 
            id: result.insertId,
            remaining_uploads: 2 - newCount
        });
    } catch (err) {
        console.error('❌ MySQL Product Upload Error:', err);
        res.status(500).json({ error: `Database error: ${err.message}` });
    }
});

// Get My Listings
app.get('/api/products/user/:userId', (req, res) => {
    const { userId } = req.params;
    // Unified query to get active/recent-sold products AND archived sold products
    const query = `
        SELECT id, user_id, name_en, name_ar, price, contact, category, \`condition\`, location, seller_name, date, image, isNew, status, sold_at 
        FROM products 
        WHERE user_id = ?
        UNION ALL
        SELECT id, user_id, name_en, name_ar, price, contact, category, \`condition\`, location, seller_name, date, image, isNew, status, sold_at 
        FROM sold_history 
        WHERE user_id = ?
        ORDER BY date DESC
    `;
    db.query(query, [userId, userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.get('/api/sales/total', (req, res) => {
    // Count all products with status 'sold' from both tables
    const query = `
        SELECT (
            (SELECT COUNT(*) FROM products WHERE status = 'sold') + 
            (SELECT COUNT(*) FROM sold_history)
        ) as total
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ total: results[0].total });
    });
});

app.delete('/api/products/:id', (req, res) => {
    const { userId } = req.body;
    const productId = req.params.id;

    // Check products table first
    const verifyQuery = 'SELECT user_id FROM products WHERE id = ?';
    db.query(verifyQuery, [productId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length > 0) {
            if (results[0].user_id !== userId) return res.status(403).json({ error: 'Forbidden' });
            
            db.query('DELETE FROM products WHERE id = ?', [productId], (err) => {
                if (err) return res.status(500).json({ error: err.message });
                return res.json({ message: 'Product deleted successfully' });
            });
        } else {
            // Check sold_history table
            const verifyHistoryQuery = 'SELECT user_id FROM sold_history WHERE id = ?';
            db.query(verifyHistoryQuery, [productId], (err, historyResults) => {
                if (err) return res.status(500).json({ error: err.message });
                if (historyResults.length === 0) return res.status(404).json({ error: 'Product not found' });
                if (historyResults[0].user_id !== userId) return res.status(403).json({ error: 'Forbidden' });

                db.query('DELETE FROM sold_history WHERE id = ?', [productId], (err) => {
                    if (err) return res.status(500).json({ error: err.message });
                    res.json({ message: 'Product deleted from history successfully' });
                });
            });
        }
    });
});

app.put('/api/products/:id/status', (req, res) => {
    const { status, userId } = req.body;
    const productId = req.params.id;

    // First, verify ownership
    const verifyQuery = 'SELECT user_id FROM products WHERE id = ?';
    db.query(verifyQuery, [productId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Product not found' });
        if (results[0].user_id !== userId) return res.status(403).json({ error: 'Forbidden: You do not own this product' });

        // If ownership is verified, proceed with update
        const updateQuery = status === 'sold' 
            ? 'UPDATE products SET status = ?, sold_at = CURRENT_TIMESTAMP WHERE id = ?'
            : 'UPDATE products SET status = ?, sold_at = NULL WHERE id = ?';
            
        db.query(updateQuery, [status, productId], (err, updateResult) => {
            if (err) return res.status(500).json({ error: err.message });
            
            // Increment user's total_sold if product is marked as sold
            if (status === 'sold') {
                db.query('UPDATE users SET total_sold = total_sold + 1 WHERE id = ?', [userId], (err) => {
                    if (err) console.error('Error incrementing user total_sold:', err);
                    res.json({ message: 'Product status updated successfully and user sales incremented' });
                });
            } else {
                res.json({ message: 'Product status updated successfully' });
            }
        });
    });
});

app.put('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    const { name_en, name_ar, price, category, condition, image, userId } = req.body;

    if (!userId) return res.status(401).json({ error: 'User ID is required' });

    try {
        // 1. Verify ownership
        const [rows] = await db.promise().query('SELECT user_id FROM products WHERE id = ?', [productId]);
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        if (rows[0].user_id !== userId) return res.status(403).json({ error: 'Unauthorized to edit this product' });

        // 2. Update product
        const query = `
            UPDATE products 
            SET name_en = ?, name_ar = ?, price = ?, category = ?, \`condition\` = ?, image = ? 
            WHERE id = ?
        `;
        await db.promise().query(query, [name_en, name_ar || name_en, price, category, condition, image, productId]);

        res.json({ message: 'Product updated successfully' });
    } catch (err) {
        console.error('Update product error:', err);
        res.status(500).json({ error: err.message });
    }
});

// --- Requests Endpoints ---

app.get('/api/requests', (req, res) => {
    const query = 'SELECT requests.*, users.full_name as requester_name FROM requests LEFT JOIN users ON requests.user_id = users.id ORDER BY requests.created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching requests:', err);
            return res.status(500).json({ error: err.message });
        }
        // If requester_name is null (user deleted), provide a fallback
        const processedResults = results.map(r => ({
            ...r,
            requester_name: r.requester_name || 'Anonymous User'
        }));
        res.json(processedResults);
    });
});

app.post('/api/requests', async (req, res) => {
    try {
        const { user_id, part_name, details, category, phone, image } = req.body;
        const userId = user_id;

        if (!userId || !part_name || !phone || !image) {
            return res.status(400).json({ error: 'Missing required fields (Image is mandatory)' });
        }

        // 1. Get user address from DB (Automatic location)
        const [userRows] = await db.promise().query('SELECT address FROM users WHERE id = ?', [userId]);
        const userAddress = (userRows.length > 0) ? (userRows[0].address || 'Cairo') : 'Cairo';

        // 2. Limit check: 2 requests per 24 hours
        const [limitResults] = await db.promise().query('SELECT COUNT(*) as count FROM requests WHERE user_id = ? AND created_at > NOW() - INTERVAL 1 DAY', [userId]);

        if (limitResults[0].count >= 2) {
            return res.status(429).json({
                error: 'Limit reached',
                message_ar: 'لقد وصلت للحد الأقصى المسموح به (طلبان خلال 24 ساعة). يرجى الانتظار لتتمكن من إضافة طلب جديد.',
                message_en: 'You have reached the limit (2 requests per 24 hours). Please wait before posting again.'
            });
        }

        const query = 'INSERT INTO requests (user_id, part_name, details, category, phone, location, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
        await db.promise().query(query, [userId, part_name, details, category, phone, userAddress, image || null]);
        
        res.status(201).json({ message: 'Request posted successfully' });
    } catch (err) {
        console.error('Error posting request:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.delete('/api/requests/:id', (req, res) => {
    const { userId } = req.body;
    const requestId = req.params.id;
    
    // Ownership check
    db.query('SELECT user_id FROM requests WHERE id = ?', [requestId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Request not found' });
        if (results[0].user_id !== userId) return res.status(403).json({ error: 'Forbidden' });

        db.query('DELETE FROM requests WHERE id = ?', [requestId], (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Request deleted successfully' });
        });
    });
});

// --- Favorites Endpoints ---

app.get('/api/favorites/:userId', (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT product_id FROM favorites WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results.map(row => row.product_id));
    });
});

app.post('/api/favorites', (req, res) => {
    const { userId, productId } = req.body;
    const query = 'INSERT IGNORE INTO favorites (user_id, product_id) VALUES (?, ?)';
    db.query(query, [userId, productId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Added to favorites' });
    });
});

app.delete('/api/favorites/:userId/:productId', (req, res) => {
    const { userId, productId } = req.params;
    const query = 'DELETE FROM favorites WHERE user_id = ? AND product_id = ?';
    db.query(query, [userId, productId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Removed from favorites' });
    });
});

// --- Sales Analytics Endpoint ---
app.get('/api/analytics/sales/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        // 1. Monthly Trends (Revenue and Count)
        const monthlyQuery = `
            SELECT 
                DATE_FORMAT(sold_at, '%Y-%m') as month, 
                COUNT(*) as count,
                SUM(price) as revenue
            FROM (
                SELECT sold_at, price FROM products WHERE user_id = ? AND status = 'sold' AND sold_at IS NOT NULL
                UNION ALL
                SELECT sold_at, price FROM sold_history WHERE user_id = ? AND sold_at IS NOT NULL
            ) combined_sales
            GROUP BY month
            ORDER BY month ASC
            LIMIT 12
        `;
        const [monthlyData] = await db.promise().query(monthlyQuery, [userId, userId]);

        // 2. Category Distribution
        const categoryQuery = `
            SELECT 
                category, 
                COUNT(*) as count,
                SUM(price) as revenue
            FROM (
                SELECT category, price FROM products WHERE user_id = ? AND status = 'sold'
                UNION ALL
                SELECT category, price FROM sold_history WHERE user_id = ?
            ) cat_sales
            GROUP BY category
            ORDER BY revenue DESC
        `;
        const [categoryData] = await db.promise().query(categoryQuery, [userId, userId]);

        // 3. Lifetime Stats
        const statsQuery = `
            SELECT 
                COUNT(*) as total_sold,
                SUM(price) as total_revenue,
                AVG(price) as avg_price
            FROM (
                SELECT price FROM products WHERE user_id = ? AND status = 'sold'
                UNION ALL
                SELECT price FROM sold_history WHERE user_id = ?
            ) lifetime
        `;
        const [statsRows] = await db.promise().query(statsQuery, [userId, userId]);
        const lifetimeStats = statsRows[0] || { total_sold: 0, total_revenue: 0, avg_price: 0 };

        res.json({
            monthly: monthlyData,
            categories: categoryData,
            stats: lifetimeStats
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// For any other non-API route, try to serve the HTML file
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    
    const cleanPath = req.path.split('?')[0];
    const filePath = path.join(__dirname, cleanPath.endsWith('.html') ? cleanPath : `${cleanPath}.html`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            // If it's a sub-path that doesn't exist, just fallback to index.html
            res.sendFile(path.join(__dirname, 'index.html'));
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('[GLOBAL ERROR]:', err);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message
    });
});

// Test Database Connection Route
app.get('/api/test-db', async (req, res) => {
    try {
        const connection = await db.promise().getConnection();
        await connection.query('SELECT 1');
        connection.release();
        res.json({ message: 'Database is connected!', status: 'success' });
    } catch (err) {
        res.status(500).json({ error: 'Database connection failed', details: err.message });
    }
});

// Export for Vercel
module.exports = app;

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
