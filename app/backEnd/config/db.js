var mysql = require("mysql");
var pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "alcoin"
});

function query(sql, callback){
	pool.getConnection(function(err,connection){
		connection.query(sql, function(err rows) {
			callback(err,rows);
			connection.release();
		}});
	});
}
export.query = query;