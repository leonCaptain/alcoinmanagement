import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import './index.css';
import tsIcon from '../../assets/icoinwarning.png';

class Warning extends Component {
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
		    <div className = "warning" >
			<div className="Topwaring">
			<p style={{float: 'left' }}>{this.props.projectwarninglist.warningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.props.projectwarninglist.list.map((item, index) =>
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