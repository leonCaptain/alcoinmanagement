import React, {Component} from 'react';
import {increment, decrement, reset} from '../actions/counter';
import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import {Layout, Menu, Breadcrumb, Icon,Row, Col} from 'antd';
import LineChart from '../components/lineChart';
import BarChart from '../components/barChart';
import SimplebarChart from '../components/simplebarChart';
import Warning from '../components/warning';
import { Avatar } from 'antd';
import '../css/homeContainer.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Counter extends Component {
    render() {
    return (
	<Layout>
			<Header className="homeTopheader">
				<div style={{float: 'left' }}>
					<h1>LOGO</h1>
				</div>
				<div style={{float: 'right' }}>
					<Icon type="search" />
					<Icon type="bell" />
					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					<span>wangliang</span>
				</div>
			</Header>
			<Layout >
				<Sider  className="homeSider">
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
				<Layout style={{ padding: '40px 0px 40px',background: 'rgba(246,246,246,1)' }}>
						<div className="homewarning">
								<Warning></Warning>
								<Warning></Warning>
								<Warning></Warning>
						</div>,
						<div className="homechart">
							<div className="chart barchart">
								<div className="homechartheader">
								<p style={{float: 'left' }}>交易量排行榜前10(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' }}/>
								</div>
								<BarChart></BarChart>
							</div>
							<div className="chart barchart">
								<div className="homechartheader">
								<p style={{float: 'left' }}>涨幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' }}/>
								</div>
								<SimplebarChart></SimplebarChart>
							</div>
							<div className="chart barchart">
								<div className="homechartheader">
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
        counter: state.home.counter
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: ()=> {
            dispatch(reset())
        }
    }
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
