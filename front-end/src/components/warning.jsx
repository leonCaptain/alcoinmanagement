import React, { Component } from 'react';
import '../css/warning.css';


class Ullist extends Component {
	constructor (props) {
		super(props);
		this.state = {
			list: [{
					id: 0,
					text: 0,
					data:'what????'
				},
				{
					id: 1,
					text: 0,
					data:'what????'
				},
				{
					id: 2,
					text: 0,
					data:'what????'
				}
			],
			

		};
	}
	render () {
		return (
		    <div className = "warning" >
			<div className="Topwaring">已关注项目提醒</div>
			<ul>
			{
				this.state.list.map((item, index) =>
					<li key={item.id}id={item.id} > 
					<div
					 className='check-btn'
					 id={item.id}
					 style={{background:'url(${img1})' }}>
					
					</div>
					<span >
						{ item.text }
					</span>
					<span className="delete-btn">
						{ item.data }
					</span>
					</li>
					
				)
			}
			</ul> 
			</div >
		);
	}
}
export default Ullist;