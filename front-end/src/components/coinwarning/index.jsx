import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import './style.scss';
import tsIcon from '../../assets/icoinwarning.png';

class Coinwarning extends Component {
	constructor (props) {
		super(props);
	}
	
	static propTypes={
		projectwarninglist:PropTypes.shape({
				list: PropTypes.array.isRequired,
				warningtext: PropTypes.string.isRequired,
		}),
	};
	
	render () {
		return (
		    <div className ="coinwarning">
			<div className="coinTopwaring">
			<p style={{float: 'left' }}>{this.props.coinwarninglist.warningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.props.coinwarninglist.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='coin-icon-btn'src={`./assets/${item.icon}`}>
					</div>
					<div style={{float: 'right'}} className="coinwarningText" >
					<p>
						<span id="coinMoney">当前价格:&nbsp;&nbsp;{item.money}</span>
						<span className="circle"></span>
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