let moment =  require('moment');
let path =  require('path');
let dbHelper = require('../sql/dbHelper');
let sql = {
	queryByUserId: 'SELECT * FROM coin_holder WHERE user_id=?',
	addOne:'INSERT INTO coin_holder(null,coin_name, average_price, curent_price, create_time, user_id, yield) VALUES(null,?,?,?,?,?)',
	updateOne: 'UPDATE coin_holder SET average_prcie=?, current_price=?, yeld =?, update_time= ? WHERE coin_name=? and user_id = ?',
	deleteOne: 'DELETE FROM ?? WHERE coin_name=? and user_id = ?',

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
		let average_prcie = req.body.average_price;
		let coin_name = req.body.coin_name;
		//应该由查询接口获取。
		let current_price = req.body.current_price;
		let yeld = req.body.yeld;
		//todo 这次查询应该可以简化去掉
		let coins = this.fetchByUserId(user_id);
		let query, arr;
		if (!coins.user_id) {
			query = sql.addOne;
			arr = [coin_name, average_prcie, current_price, Date.now(), user_id, yeld]
		}else {
			arr = [average_prcie, current_price,yeld, Date.now(), coin_name, user_id]
			query = sql.updateOne;
		}
		let query = !coins.user_id ? sql.addOne : sql.updateOne;
		dbHelper.connPool(query, arr, rows => {
			res.send({code: 200, msg: 'done'})
		});
	},
	updateOne (req, res) {
		//todo 简便写法
		let user_id = req.body.user_id;
		let average_prcie = req.body.average_price;
		let coin_name = req.body.coin_name;
		//应该由查询接口获取。
		let current_price = req.body.current_price;
		let yeld = req.body.yeld;
		let query, arr;
		arr = [average_prcie, current_price,yeld, Date.now(), coin_name, user_id]
		let query = !coins.user_id ? sql.addOne : sql.updateOne;
		dbHelper.connPool(sql.updateOne, arr, rows => {
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