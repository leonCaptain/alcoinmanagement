import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import actions from './actions';
import plugins from './plugins';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		coinIndexData:[{
			coin_name:'eos',
			average_price: '8',
			current_price: '9',
			count: '1000',
			yield: '1.2'
		},{
			coin_name:'btc',
			average_price: '3900',
			current_price: '4000',
			count: '10',
			yield: '1.3'
		},{
			coin_name:'eth',
			average_price: '150',
			current_price: '156',
			count: '10',
			yield: '1.2'
		}],
		settingData: {
			priceSetting: {
				current: 'cny',
				available_user_pairs: ['btc', 'eth', 'usdt']
			}
		}
	},
	actions,
	mutations,
	plugins
})