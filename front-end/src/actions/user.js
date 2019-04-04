import axios from 'axios'

//默认的state
const initialState = {
	loading: true,
	error: false,
	user: {}
};

//不同的几种action
const LOAD_USER = 'LOAD_USER';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_ERROR = 'LOAD_USER_ERROR';

function userLoading (loading) {
	return {
		type: LOAD_USER,
		payload: loading,
	};
}

function userSuccess (data) {
	return {
		type: LOAD_USER_SUCCESS,
		payload: data,
	};
}

function userError (error) {
	return {
		type: LOAD_USER_ERROR,
		payload: error,
	};
}

//action creator函数
export function loadUser () {
	return dispatch => {
		dispatch(userLoading(true));
		axios.get('/data/user.json')
		.then( response => {
			dispatch(userLoading(false));
			dispatch(userSuccess(response.data.result.user));
		})
		.catch( error => {
			dispatch(userLoading(false));
			dispatch(userError(true));
		})
	}
}
