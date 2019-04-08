import React from 'react';
import {
  Layout, Menu, Avatar, Icon,Table, Button, Popconfirm,Form,Modal,Dropdown
} from 'antd';
import SearchSvg from '../../assets/search.svg';
import BellSvg from '../../assets/bell.svg';
import AlMenu from '../../components/alMenu/index';
import LogoSvg from '../../assets/alcoinanalysisz_logo.svg';
import Login from '../login/index';
import Register from '../register/index';
import "../../style/pageLayout/index.css";
import {Link} from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
	<Icon type="setting" />设置
    </Menu.Item>
    <Menu.Item>
	<Icon type="logout" />登出
    </Menu.Item>
  </Menu>
);

export default class PageLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			showmodel:true
		}
	}
	showloginModel = () =>{
		this.setState({
			visible: true,
			showmodel:true
		});
	}
	showregisterModel = () =>{
		this.setState({
			visible:true,
			showmodel:false
		})
	}
	handleCancel=()=>{
		this.setState({
			visible: false
		});
	}
	render() {
		return(
			<div className="al-layout">
				<Layout>
				    <Header className="al-header" style={{ padding: "0"}}>
						<div className="al-left">
							<Icon className="al-logo" component={LogoSvg} />
						</div>
						<div className="al-light">
							<Icon className="search" component={SearchSvg} />
							<Icon className="bell" component={BellSvg} />
							{true?<Dropdown overlay={menu} placement="bottomCenter">
							<Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							</Dropdown>
							:<span className="avatar"onClick={this.showloginModel} >登录</span>}
							<Modal
								visible={this.state.visible}
								onCancel={this.handleCancel}
								footer={null}
								destroyOnClose={true}
								width={398}
							>
							{this.state.showmodel?<Login/>:<Register/>}
							</Modal>
							{false?<span className="userBox" >arthorn</span>
							:<span className="userBox" onClick={this.showregisterModel}>注册</span>}
						</div> 	
				    </Header>
				  <Layout>
				    <Sider className="al-left-sider">
				    	<AlMenu > </AlMenu>
				    </Sider>
				  	<Content className="al-content">
				  	  	{
                    		React.Children.map(this.props.children,function(child){
                        		return <div>{child}</div>;
                    		})
                		}
				  	</Content>
				  </Layout>
				</Layout>
			</div>
		)
	}
}

