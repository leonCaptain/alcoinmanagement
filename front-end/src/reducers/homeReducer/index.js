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
		}]
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
