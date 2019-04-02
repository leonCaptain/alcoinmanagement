import React from 'react';
import "../../style/monitorPanel.css";


export default class TodayProfitPanel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="al-monitor"> 
				<div className="today_profit"></div>
				<div className="today_profit_rate"></div>
				<div className="total_value_dollar"></div>
				<div className="total_value_btc"></div>
			</div>
		)
	}
}