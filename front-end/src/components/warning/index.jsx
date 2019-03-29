import React, { Component } from 'react';
import {Icon} from 'antd';
import './index.css';
import tsIcon from '../../assets/icoinwarning.png';

class Warning extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
					id: 0,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',
				},
				{
					id: 1,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',
				},
				{
					id: 2,
					text: 'Evaluape评级 &#91Fetch.AI] :人工智能驱动的智能账本,评分:6.9',
					data:'一小时前',	
				}
			],
			warningtext:'已关注项目提醒'
		};
	}
	render () {
		return (
		    <div className = "warning" >
			<div className="Topwaring">
			<p style={{float: 'left' }}>{this.state.warningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='icon-btn'src={`./assets/${item.icon}`}>
					</div>
					<div style={{float: 'right'}} className="warningText" >
					<p>
						{ item.text }
					</p>
					<span className="time-btn">
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
export default Warning;