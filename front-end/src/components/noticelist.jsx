import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Icon } from 'antd';
import './css/noticelist.css';

class Notice extends Component {

	static propTypes = {
		noticeList: PropTypes.arrayOf(PropTypes.object),
		loadNoticeList: PropTypes.func,
	}
	
	/* componentDidMount () {
		this.props.loadNoticeList();
	} */

	render () {

		const num = this.props.noticeList.length > 0 ? this.props.noticeList.length : 0;

		return (
			<div className="notice">
			    <Icon type="search" />
				<Badge count={num}>
			    <Icon type="bell" />
			    </Badge>
			</div>
		);
	}
}

export default Notice;