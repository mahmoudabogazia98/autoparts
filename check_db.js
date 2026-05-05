const mysql = require('mysql2/promise');

async function checkDB() {
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '123456789',
            database: 'autoparts_final_db'
        });
        const [usersSchema] = await connection.execute('DESCRIBE users');
        console.log('Users Table Structure:');
        console.table(usersSchema);
        const [users] = await connection.execute('SELECT id, full_name, email FROM users');
        console.log('Users count:', users.length);
        console.table(users);
        const [products] = await connection.execute('SELECT * FROM products');
        console.log('Products count:', products.length);
        await connection.end();
    } catch (err) {
        console.error('Error:', err.message);
    }
}

checkDB();