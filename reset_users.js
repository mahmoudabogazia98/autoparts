const mysql = require('mysql2/promise');

async function resetUsers() {
    const dbConfig = {
        host: '127.0.0.1',
        user: 'root',
        password: '123456789',
        database: 'autoparts_final_db'
    };

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to DB for cleanup...');

        // Disable foreign key checks to truncate users safely
        await connection.execute('SET FOREIGN_KEY_CHECKS = 0');
        
        console.log('Truncating users table...');
        await connection.execute('TRUNCATE TABLE users');
        
        // Also truncate favorites as they depend on users
        console.log('Truncating favorites and requests...');
        await connection.execute('TRUNCATE TABLE favorites');
        await connection.execute('TRUNCATE TABLE requests');
        
        await connection.execute('SET FOREIGN_KEY_CHECKS = 1');
        
        console.log('✅ Database users and related data cleared successfully!');
    } catch (err) {
        console.error('❌ Error during cleanup:', err.message);
    } finally {
        if (connection) await connection.end();
    }
}

resetUsers();
