const mysql = require('mysql2/promise');

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'autoparts_final_db'
};

async function forceResetDB() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to MySQL.');

        await connection.execute('SET FOREIGN_KEY_CHECKS = 0');
        await connection.execute('DROP TABLE IF EXISTS products');
        console.log('Table products dropped.');

        const createProductsQuery = `
            CREATE TABLE products (
                id BIGINT PRIMARY KEY,
                user_id INT NOT NULL,
                name_en VARCHAR(255) NOT NULL,
                name_ar VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                contact VARCHAR(50) NOT NULL,
                category VARCHAR(50) DEFAULT 'all',
                \`condition\` VARCHAR(50) DEFAULT 'New',
                location VARCHAR(255) DEFAULT 'Cairo',
                seller_name VARCHAR(100) DEFAULT 'Guest',
                date DATE NOT NULL,
                image LONGTEXT NOT NULL,
                isNew BOOLEAN DEFAULT 1,
                status VARCHAR(20) DEFAULT 'available',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await connection.execute(createProductsQuery);
        console.log('Table products created with correct columns.');

        await connection.execute('SET FOREIGN_KEY_CHECKS = 1');
        console.log('✅ Database Schema Reset Successfully.');
        
        await connection.end();
    } catch (err) {
        console.error('❌ Error during DB reset:', err.message);
    }
}

forceResetDB();
