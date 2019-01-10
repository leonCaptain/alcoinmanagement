//http://localhost:9999/api/holdcoin/list/10001
let base_host = 'http://localhost/';
let port = '9999';
let base_url = '/api/'
const  base_api = {
	fetchCoinList: 'holdcoin/list/10001',
	fetchCoinCategoryList: 'coin/list'
};

let format_api = function () {
	let _format_api = {};
	for(let [name, value] in Object.entries(base_api) ) {
		_format_api[name] = base_host + port + base_url + value;
	}
	return _format_api;
} 
export default format_api();