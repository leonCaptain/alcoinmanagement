let sql =  require('../sql/sql');
let moment = require('moment');
let dbHelper = require('../sql/dbHelper');
let path =  require('path');

	//加上create_time
function formatData(rows) {
	return rows.map(row => {
		let data = moment(row.create_time).format('YYYY-MM-DD');
		return Object.assign({}, row, {create_time: data});
	})
}

module.exports = {
	fetchAll (req, res) {
		
	}
}