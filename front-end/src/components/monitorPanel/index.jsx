import React from 'react';
import "../../style/monitorPanel.css";
import { Icon } from 'antd';
import LineBlueSvg from '../../assets/line_blue.svg';
import LineRedSvg from '../../assets/line_red.svg';
import UpSvg from '../../assets/up.svg';
import DownSvg from '../../assets/up.svg';
import DollarSvg from '../../assets/img_dollar.svg';
import BtcCoinSvg from '../../assets/img_bitcoin.svg';


export default class TodayProfitPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todayProfit: {
				profit: 1205,
				type: 'up',
				rate: "12%",
				typeIcoin: UpSvg,
				typeSymbol: '+'
			},
			totalValueByBtc: 0.8,
			totalValueByDollar: 3000
		}
	}

	render() {
		return (
			<div className="al-monitor"> 
				<div className="today_profit panel">
					<span className="al-m-title">今日利润(周线)</span>
					<span className="al-m-content">{this.state.todayProfit.typeSymbol + this.state.todayProfit.profit}</span>
					<Icon className="al-m-type-svg" component={this.state.todayProfit.typeIcoin} />
					<Icon className="al-m-line-svg" component={LineBlueSvg}/>
				</div>
				<div className="today_profit_rate panel" >
					<span className="al-m-title">今日利润率(周线)</span>
					<span className="al-m-content">{this.state.todayProfit.typeSymbol + this.state.todayProfit.rate}</span>
					<Icon className="al-m-type-svg" component={this.state.todayProfit.typeIcoin} />
					<Icon className="al-m-line-svg" component={LineRedSvg} />
				</div>
				<div className="total_value_dollar panel">
					<div className="left">
						<span className="al-m-title">总价值(美元)</span>
						<span className="al-m-content">{this.state.totalValueByDollar}</span>
					</div>
					<div className="right" > 
						<Icon className="al-m-line-dollar-svg" component={DollarSvg} />
					</div>
					<div className="clear-float"> </div>
				</div>
				<div className="total_value_btc panel">
					<div className="left">
						<span className="al-m-title">总利润(BTC)</span>
						<span className="al-m-content">{this.state.totalValueByBtc}</span>
					</div>
					<div className="right">
						<Icon className="al-m-line-btc-svg" component={BtcCoinSvg} />
					</div>
					<div className="clear-float"> </div>
				</div>
			</div>
		)
	}
}