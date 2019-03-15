import { INCREMENT, DECREMENT, RESET } from '../constant';

//整合reudcer
const initialState = {
  initialCount: 10,
  counter: 10
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
