import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../actions/counter';
import {Layout, Menu, Breadcrumb,Icon,Row,Col,Avatar} from 'antd';
import LineChart from '../components/lineChart';
import BarChart from '../components/barChart';
import SimplebarChart from '../components/simplebarChart';
import Warning from '../components/warning';
import User from '../components/user';
import Notice from '../components/noticelist';
import './css/homeContainer.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Counter extends Component {
    render() {
    return (
	<Layout className="home">
			<Header className="Topheader">
				<div style={{float: 'left' }}>
					<h1 className="Logo">LOGO</h1>
				</div>
				<div style={{float: 'right' }}>
					<Notice noticeList={this.props.noticeListData} 
						loadNoticeList={this.props.loadNoticeList} 
					/>
					<User userdata={this.props.userData} 
					loadUser={this.props.loadUser} 
					/>
				</div>
			</Header>
			<Layout >
				<Sider  className="home-Sider">
					<Header style={{ backgroundColor: '#FFFFFF',color:'#0284FE',borderBottom:'1px #ccc solid' }}>
						概述
					</Header>
					<Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
						<SubMenu key="sub1" title={<span>
							<Icon type="user" />投资组合</span>}>
							<Menu.Item key="1">投资详情</Menu.Item>
							<Menu.Item key="2">数据分析</Menu.Item>
							<Menu.Item key="3">提醒</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className="home-Content">
						<div className="content-Warning">
								<Warning></Warning>
								<Warning></Warning>
								<Warning></Warning>
						</div>,
						<div className="content-Chart">
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>交易量排行榜前10(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' }}/>
								</div>
								<BarChart barchartdata={this.props.barchartdata}></BarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>涨幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' }}/>
								</div>
								<SimplebarChart></SimplebarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>跌幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' }}/>
								</div>
								<SimplebarChart></SimplebarChart>
							</div>
						</div>,
				</Layout>
			</Layout>
		</Layout>
        )
    }
}
const mapStateToProps = (state) => {
	return {
        counter: state.home.counter,
		barchartdata:state.home.barchartdata,
		userData:state.home.userdata,
		noticeListData:state.home.noticeList
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(increment())
        },
    }
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
