let moment =  require('moment');
let path =  require('path');
let dbHelper = require('../sql/dbHelper');
let utils = require('../utils/utils');

let sql = {
	queryByUserId: 'SELECT * FROM coin_holder WHERE user_id=?',
	addOne:'INSERT INTO coin_holder(coin_name, average_price, current_price, create_time, user_id, yield) VALUES(?,?,?,?,?,?)',
	updateOne: 'UPDATE coin_holder SET average_price=?, current_price=?, yield =?, update_time= ? WHERE coin_name=? and user_id = ?',
	deleteOne: 'DELETE FROM coin_holder WHERE coin_name=? and user_id = ?',

}
function formatData(rows) {
	if(!rows){ return {}}
	return rows.map(row => {
		let date = moment(row.create_time).format('YYYY-MM-DD');
		return Object.assign({}, row, {create_time: date});
	})
}
module.exports = {
	fetchByUserId (req, res) {
		let userId = req.params.user_id;
 		dbHelper.connPool(sql.queryByUserId, userId, rows => {
 			rows = formatData(rows);
 			res.send({code: 200,  msg: 'ok', coins: rows})
 		})
	},
	addOne (req, res) {
		//todo 简便写法
		let user_id = req.body.user_id;
		let average_price = req.body.average_price;
		let coin_name = req.body.coin_name;
		//应该由查询接口获取。
		let current_price = req.body.current_price;
		let yield = req.body.yield;
		dbHelper.connPool(sql.addOne, [coin_name, 
									   average_price, 
									   current_price, 
									   utils.getNowFormatDate(), 
									   user_id, yield], rows => {
			res.send({code: 200, msg: 'done'})
		});
	},
	updateOne (req, res) {
		//todo 简便写法
		let user_id = req.body.user_id;
		let average_price = req.body.average_price;
		let coin_name = req.body.coin_name;
		//应该由查询接口获取。
		let current_price = req.body.current_price;
		let yield = req.body.yield;
		dbHelper.connPool(sql.updateOne, [average_price, 
										  current_price,
										  yield, 
										  utils.getNowFormatDate(), 
										  coin_name, 
										  user_id], rows => {
			res.send({code: 200, msg: 'done'})
		});
	},
	deleteOne (req, res) {
		let user_id = req.body.user_id;
		let coin_name = req.body.coin_name;
		dbHelper.connPool(sql.deleteOne, [coin_name, user_id], rows => {
			res.send({code: 200, msg: 'done'})
		});	
	}
}