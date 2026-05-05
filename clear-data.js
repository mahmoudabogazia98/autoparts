const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789', // Your password
    database: 'autoparts_final_db'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Connection error:', err.message);
        return;
    }
    console.log('Connected to database. Starting cleanup...');

    // Disable foreign key checks to allow deleting everything
    db.query('SET FOREIGN_KEY_CHECKS = 0', (err) => {
        if (err) return console.error(err);

        // 1. Clear Products
        db.query('DELETE FROM products', (err) => {
            if (err) console.error('❌ Error clearing products:', err.message);
            else console.log('✅ Products table cleared!');

            // 2. Clear Users
            db.query('DELETE FROM users', (err) => {
                if (err) console.error('❌ Error clearing users:', err.message);
                else console.log('✅ Users table cleared!');

                // Re-enable foreign key checks
                db.query('SET FOREIGN_KEY_CHECKS = 1', () => {
                    console.log('\n✨ Database is now EMPTY.');
                    console.log('💡 Note: You might need to clear your Browser LocalStorage too!');
                    db.end();
                });
            });
        });
    });
});
