import React from 'react';
import {
  Layout, Menu, Avatar, Icon,
} from 'antd';
import SearchSvg from '../../assets/search.svg';
import BellSvg from '../../assets/bell.svg';
import AlMenu from '../../components/alMenu/index';
import LogoSvg from '../../assets/alcoinanalysisz_logo.svg';
import "../../style/pageLayout/index.css";


const { Header, Content, Sider } = Layout;

export default class PageLayout extends React.Component {
	constructor(props) {
		super(props);
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
  							<Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  							<span className="userBox" >arthorn</span>
						</div> 	
				    </Header>
				  <Layout>
				    <Sider className="al-left-sider">
				    	<AlMenu> </AlMenu>
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

