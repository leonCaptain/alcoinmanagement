import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import './index.scss';
import tsIcon from '../../assets/icoinwarning.png';

class Position extends Component {
	constructor (props) {
		super(props);
	}
	static propTypes={
		projectwarninglist:PropTypes.shape({
				list: PropTypes.array.isRequired,
				positionwarningtext: PropTypes.string.isRequired,
		}),
	};
	
	render () {
		
		return (
		    <div className="positionwarning" >
			<div className="positionTopwaring">
			<p style={{float: 'left' }}>{this.props.positionwarninglist.positionwarningtext}</p>
			<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px' }}/>
			</div>
			<ul>
			{
				this.props.positionwarninglist.list.map((item, index) =>
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