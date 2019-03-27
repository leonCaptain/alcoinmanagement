import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './css/user.css';

class User extends Component {
	constructor(props) {
	  super(props);
	}
	static propTypes = {
		loadUser: PropTypes.func,
		userData: PropTypes.object,
	};
	
	/* componentDidMount () {
		this.props.loadUser();
	} */
     
	render () {
		const userName = this.props.userdata.name ? this.props.userdata.name : '未登录';
		return (
			<div className="user">
				<div>
					{this.props.userdata.icon ? 
						<Avatar size="large" src={`/assets/${this.props.userdata.icon}`} /> 
						: 
						<Avatar size="large" icon="user" />	
					}
				</div>
				<div className="user-name">
				{userName}
				</div>
			</div>
		);
	}
}

export default User;