const mysql = require('mysql2/promise');

async function checkRequests() {
    try {
        const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '123456789',
            database: 'autoparts_final_db'
        });
        
        console.log('--- Checking Requests Table ---');
        const [requestsSchema] = await connection.execute('DESCRIBE requests');
        console.log('Requests Table Structure:');
        console.table(requestsSchema);
        
        const [requests] = await connection.execute('SELECT * FROM requests');
        console.log('Total Requests in DB:', requests.length);
        if (requests.length > 0) {
            console.log('Sample Request Data:');
            console.table(requests.slice(0, 5));
        }
        
        const [users] = await connection.execute('SELECT id, full_name FROM users');
        console.log('\n--- Checking Users Table ---');
        console.log('Total Users in DB:', users.length);
        
        await connection.end();
    } catch (err) {
        console.error('Error:', err.message);
    }
}

checkRequests();
