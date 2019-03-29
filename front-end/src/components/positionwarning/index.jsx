import React, { Component } from 'react';
import {Icon} from 'antd';
import './index.css';
import tsIcon from '../../assets/iconwartning.png';

class Position extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
					id: 0,
					text: '10%',
					data:'一小时前',
				},
				{
					id: 1,
					text: '10%',
					data:'一小时前',
				},
				{
					id: 2,
					text: '10%',
					data:'一小时前',	
				}
			],
			warningtext:'持仓提醒'
		};
	}
	render () {
		return (
		    <div className = "positionwarning" >
			<div className="positionTopwaring">
			<p style={{float: 'left' }}>{this.state.warningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div className="positionwarningText" >
					<p>
						以亏损{ item.text }请注意
					</p>
					<span className="position-time-btn">
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
export default Position;