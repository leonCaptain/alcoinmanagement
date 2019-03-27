import React, { Component } from 'react';
import {Icon} from 'antd';
import './css/warning.css';
import tsIcon from '../assets/iconwartning.png';


class Ullist extends Component {
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
			<Icon type="ellipsis" style={{float: 'right' }}/>
			</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='icon-btn'>
					</div>
					<div style={{float: 'right'}} className="warningText" >
					<span >
						{ item.text }
					</span>
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
export default Ullist;