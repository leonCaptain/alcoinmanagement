import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from '../../actions/counter';
import {Layout, Menu, Breadcrumb,Icon,Row,Col,Avatar} from 'antd';
import LineChart from '../../components/lineChart/index.jsx';
import BarChart from '../../components/barChart/index.jsx';
import SimplebarChart from '../../components/simplebarChart/index.jsx';
import Warning from '../../components/warning/index.jsx';
import PositionWarning from '../../components/positionwarning/index.jsx';
import CoinWarning from '../../components/coinwarning/index.jsx';
import User from '../../components/user/index.jsx';
import Notice from '../../components/noticelist/index.jsx';
import { loadUser } from '../../actions/user';
import './index.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Counter extends Component {
    render() {
    return (
	<Layout className="home">
			<Header className="Topheader">
				<div  className="Logo"  style={{float: 'left' }}>
				    <p></p>
					<h1>Alcoinanalysis</h1>
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
								<Warning projectwarninglist={this.props.projectwarningdata}></Warning>
								<CoinWarning coinwarninglist={this.props.coinwarningdata}></CoinWarning>
								<PositionWarning positionwarninglist={this.props.positionwarningdata}></PositionWarning>
						</div>,
						<div className="content-Chart">
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>交易量排行榜前10(24h)</p>
								<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px'  }}/>
								</div>
								<BarChart barchartdata={this.props.barchartdata}></BarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>涨幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px'  }}/>
								</div>
								<SimplebarChart color={['coin',[ '#15AD3F','#1AD74D','#79EF99','#29DEDF','#92FEFF' ]]}></SimplebarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>跌幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' ,marginTop:'12px',marginRight:'16px' }}/>
								</div>
								<SimplebarChart color={['coin',[ '#DD2727','#FF5D5D','#FFA1A1','#FFC554','#FFE172' ]]}></SimplebarChart>
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
		userData: {
			loading: state.home.userData.loading,
			error: state.home.userData.error,
			user: state.home.userData.user,
		},
    counter: state.home.counter,
		barchartdata:state.home.barchartdata,
		noticeListData:state.home.noticeList,
		projectwarningdata:state.home.projectwarning,
		positionwarningdata:state.home.positionwarning,
		coinwarningdata:state.home.coinwarning
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(increment())
        },
		/* loadUser:()=>{
			dispatch(loadUser())
		}, */
    }
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
