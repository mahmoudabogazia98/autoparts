const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');

async function testLogin() {
    const dbConfig = {
        host: '127.0.0.1',
        user: 'root',
        password: '123456789',
        database: 'autoparts_final_db'
    };

    const connection = await mysql.createConnection(dbConfig);
    const email = 'mahmoud@gamil.com';
    const password = '123'; // I'll assume this might be the password or try common ones

    console.log(`Testing login for ${email}...`);
    const [rows] = await connection.execute('SELECT password FROM users WHERE email = ?', [email]);
    
    if (rows.length === 0) {
        console.log('User not found');
    } else {
        const storedHash = rows[0].password;
        console.log('Stored Hash:', storedHash);
        
        // Let's try comparing with '123' or whatever password they might have used
        const testPasswords = ['123', '123456', '123456789', 'mahmoud'];
        for (const pw of testPasswords) {
            const match = await bcrypt.compare(pw, storedHash);
            console.log(`Comparing with "${pw}": ${match ? 'MATCH ✅' : 'NO MATCH ❌'}`);
        }
    }
    await connection.end();
}

testLogin();
