var mysql = require('mysql');

var db_options = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'signin'
};

exports.connection  = mysql.createConnection(db_options);
exports.options = db_options;

var conn = mysql.createConnection(db_options);
