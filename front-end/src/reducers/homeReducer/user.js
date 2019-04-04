
//处理用户信息的reducer函数
function userReducer (state = initialState, action) {
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