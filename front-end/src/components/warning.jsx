import React, { Component } from 'react';
import {Icon} from 'antd';
import '../css/warning.css';
import tsIcon from '../assets/iconwartning.png';


class Ullist extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
					id: 0,
					text: 0,
					data:'what????',
				},
				{
					id: 1,
					text: 0,
					data:'what????',
				},
				{
					id: 2,
					text: 0,
					data:'what????',
				}
			],
			

		};
	}
	render () {
		return (
		    <div className = "warning" >
			<div className="Topwaring">
			<p style={{float: 'left' }}>已关注项目提醒</p>
			<Icon type="ellipsis" style={{float: 'right' }}/>
			</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='icon-btn'>
					</div>
					<div style={{float: 'right'}}>
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