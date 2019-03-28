import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './index.css';

class User extends Component {
	constructor(props) {
	  super(props);
	}
	static propTypes = {
		loadUser: PropTypes.func,
		userdata: PropTypes.object,
	};
	
	componentDidMount () {
		/* this.props.loadUser(); */
	}
     
	render () {
		const userName = this.props.userdata.user.name ? this.props.userdata.user.name : '未登录';
		return (
			<div className="user">
				<div>
					{this.props.userdata.user.icon ? 
						<Avatar size="large" src={`./assets/${this.props.userdata.user.icon}`} /> 
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