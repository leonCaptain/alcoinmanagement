import { LOAD_USER,LOAD_USER_SUCCESS,LOAD_USER_ERROR } from '../actions/user';

const initialState = {
	loading: true,
	error: false,
	user: {
		/* id: "0001",
		name: "鲁文静",
		age: 22,
		sex: "女",
		icon: "userIcon.png" */
		
		}
};
//处理用户信息的reducer函数
function userReducer (state= initialState, action) {
	switch (action.type) {
		case LOAD_USER: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case LOAD_USER_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				user: action.payload,
			};
		}

		case LOAD_USER_ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			}
		}

		default: {
			return state;
		}
	}
}
export default userReducer; 