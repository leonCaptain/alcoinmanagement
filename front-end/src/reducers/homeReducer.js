//整合reudcer
const initialState = {
  barchartdata:[
  { coin: 'btc', marketValue: 80 },
  { coin: 'eth', marketValue: 100 },
  { coin: 'eos', marketValue: 200 },
  { coin: 'ht',  marketValue: 300 },
  { coin: 'link', marketValue: 500 },
	{ coin: 'ocn', marketValue: 800 },
	{ coin: 'btt', marketValue: 1000 },
	{ coin: 'trx', marketValue: 1200 },
	{ coin: 'xvg', marketValue: 1500 },
	{ coin: 'bnb', marketValue: 2000 }
],
  userData: {
  	loading: false,
  	error: false,
  	user: {
			"id": "0001",
			"name": "鲁文静",
			"age": 22,
			"sex": "女",
			"icon": "userIcon.png"
		},
  },
	noticeList: [{
			"id": "0001",
			"name": "哈哈",
			"content": "吃饭，睡觉，打豆豆"
		},{
			"id": "0002",
			"name": "嘿嘿",
			"content": "吃饭，睡觉，打豆豆"
		},{
			"id": "0003",
			"name": "哼哼",
			"content": "吃饭，睡觉，打豆豆"
		}],
	projectwarning: {
			list: [{
					id: 0,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',
				},
				{
					id: 1,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',
				},
				{
					id: 2,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',	
				}
			],
			warningtext:'已关注项目提醒',
		},
	positionwarning:{
			list: [{
					id: 0,
					text: '10%',
					data:'一小时前',
				},
				{
					id: 1,
					text: '10%',
					data:'一小时前',
				},
				{
					id: 2,
					text: '10%',
					data:'一小时前',	
				}
			],
			positionwarningtext:'持仓提醒',
		},
	coinwarning: {
			list: [{
					id: 0,
					buywarning:'买入',
					sellwarning:'',
					data:'一小时前',
					money:'$2300',
					kvalue:'RSI超卖'
				},
				{
					id: 1,
					buywarning:'',
					sellwarning:'卖出',
					data:'一小时前',
					money:'$2300',
					kvalue:'RSI超卖'
				},
				{
					id: 2,
					buywarning:'买入',
					sellwarning:'',
					data:'一小时前',	
					money:'$2300',
					kvalue:'RSI超卖'
				}
			],
			warningtext:'已关注币种价格提醒'
		}
}

export default function homeReducer(state = initialState, {type, payload} = {}){
  switch (type) {
    case "INCREMENT":
      return {...state, counter: (state.counter + payload.count)}
      break;

    case "DECREMENT":
      return {...state, counter: (state.counter - payload.count)}
      break;

    case "RESET":
      return {...state, counter: state.initialCount}
      break;

    default:
      return {...state}
  }
}
