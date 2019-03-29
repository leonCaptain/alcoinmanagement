import React, { Component } from 'react';
import {Icon} from 'antd';
import './index.css';
import tsIcon from '../../assets/iconwartning.png';

class Coinwarning extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
					id: 0,
					buywarning:'买入',
					sellwarning:'',
					data:'一小时前',
					money:'$2300',
					kvalue:'RSI超卖'
				},
				{
					id: 1,
					buywarning:'',
					sellwarning:'卖出',
					data:'一小时前',
					money:'$2300',
					kvalue:'RSI超卖'
				},
				{
					id: 2,
					buywarning:'买入',
					sellwarning:'',
					data:'一小时前',	
					money:'$2300',
					kvalue:'RSI超卖'
				}
			],
			warningtext:'已关注币种价格提醒'
		};
	}
	render () {
		return (
		    <div className = "coinwarning" >
			<div className="coinTopwaring">
			<p style={{float: 'left' }}>{this.state.warningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='coin-icon-btn'src={`./assets/${item.icon}`}>
					</div>
					<div style={{float: 'right'}} className="coinwarningText" >
					<p>
						<span className="coinMoney">当前价格:&nbsp;&nbsp;{ item.money }</span>
						<p className="circle"></p>
						<span className="K-Line-Index">k线指标:&nbsp;&nbsp;{item.kvalue}</span>
					</p>
					<span className="coinwarning-btn"
						style={item.buywarning?{color:'rgba(11, 176, 123, 1)'}:{color:'rgba(248,68,68,1)'}}>
						<Icon type="info-circle"style={{float: 'left',marginTop:'4px'}}/>
						<span style={{float: 'left',marginLeft:'8px'}} >
						操作建议:&nbsp;&nbsp;{item.buywarning?item.buywarning :item.sellwarning}
						</span>
					</span>
					<span className="cointime-btn">
						{ item.data }
					</span>
					</div>
					</li>	
				)
			}
			</ul> 
		</div >
		);
	}
}
export default Coinwarning;