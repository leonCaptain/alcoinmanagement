import fetch from 'cross-fetch'
//默认的state
const initialState = {
	loading: true,
	error: false,
	user: {}
};

//不同的几种action
export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';

function userLoading (loading) {
	return {
		type: LOAD_USER,
		payload: loading,
	};
}

export function userSuccess (data) {
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
// export function loadUser () {
// 	return (dispatch, getState) => {
// 		dispatch(userLoading(true));
// 		fetch('http://localhost:3000/user')
// 		.then(response => response.json())
// 		.then( response => {
// 			dispatch(userLoading(false));
// 			dispatch(userSuccess(response));
// 		})
// 	}
// }
export const fetchUser = () => {
    return dispatch => {
        let url = "http://localhost:3000/user";
        fetch(url).then((res)=>{
            return res.json();
        }).then((result)=>{
			
            dispatch(userSuccess(result));
			//派发action
        })
    }
}


