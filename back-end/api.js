let path = '/api';

module.exports = {
	userProfileList: path + '/user/list',
	coinInfoList: path + '/coin/list',
	coinInfoAdd: path + '/coin/add',
	coinInfoUpdate: path + '/coin/update',
	coinInfoDelete: path + '/coin/delete',
	userTradingRecordList: path + '/tradingrecord/list',
	userTradingRecordAdd: path + '/tradingrecord/add',
	userTradingRecordUpdate: path + '/tradingrecord/update',
	userTradingRecordDelete: path + '/tradingrecord/delete',
	holderCoinList: path + '/holdcoin/list/:user_id',
	holderCoinAdd: path + '/holdcoin/add',
	holderCoinUpdate: path + '/holdcoin/update',
	holderCoinDelete: path + '/holdcoin/delete',
}