import React from 'react';
import {
  Layout, Menu, Avatar, Icon,
} from 'antd';
import './index.css';
import SearchSvg from '../../assets/search.svg';
import BellSvg from '../../assets/bell.svg';
import AlMenu from './al-sider/index.jsx';

const { Header, Content, Sider } = Layout;

export default class PageLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="al-layout">
				<Layout>
				    <Header className="al-header">
						<div className="al-left">
							<div className="al-logo"> </div>
							<span className="al-logo-content"> Alcoinanalysis</span>
						</div>
						<div className="al-light">
							<Icon className="search" component={SearchSvg} />
							<Icon className="bell" component={BellSvg} />
  							<Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  							<span className="userBox" >arthorn</span>
						</div> 	
				    </Header>
				  <Layout>
				    <Sider className="al-left-sider">
				    	<AlMenu> </AlMenu>
				    </Sider>
				  	<Content className="al-content">
				  		content
				  	</Content>
				  </Layout>
				</Layout>
			</div>
		)
	}
}

