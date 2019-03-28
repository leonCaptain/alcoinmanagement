import homeReducer from '../reducers/homeReducer/index';
import { routerReducer } from 'react-router-redux'
import { combineReducers, createStore } from 'redux';

let store = createStore(
  combineReducers({
    home:homeReducer,
    routing: routerReducer
  })
)

export default store;
