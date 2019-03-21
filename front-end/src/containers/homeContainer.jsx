import React, {Component} from 'react';
import {increment, decrement, reset} from '../actions/counter';

import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import * as NewChart from '../components/newChart.jsx';

 class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter}</div>
                <button onClick={() =>
                    this.props.increment()
                }>自增
                </button>
                <button onClick={() =>
                    this.props.decrement()
                }>自减
                </button>
                <button onClick={() =>
                    this.props.reset()
                }>重置
                </button>
                <DatePicker> </DatePicker>
				<NewChart></NewChart>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.home.counter
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: ()=> {
            dispatch(reset())
        }
    }
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
