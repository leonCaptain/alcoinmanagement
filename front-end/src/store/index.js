import homeReducer from '../reducers/homeReducer';
import userReducer from '../reducers/userReducer';
import { routerReducer } from 'react-router-redux'
import { applyMiddleware,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	user: {
		loading: false,
		error: false,
		user: {},
	}
};


let store = createStore(
  combineReducers({
    home:homeReducer,
    routing: routerReducer,
		user:userReducer,
  }),
	applyMiddleware(thunk)
)

export default store;
