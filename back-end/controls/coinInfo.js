let dbHelper = require('../sql/dbHelper');
let path =  require('path');

let sql = {
	queryAll: 'SELECT * FROM coin_info'
}

module.exports = {
	fetchCoinList (req, res) {
 		dbHelper.connPool(sql.queryAll, null,rows => {
 			res.send({code: 200,  msg: 'ok', coins: rows})
 		})
	}
}