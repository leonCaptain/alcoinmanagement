import React from 'react';
import { Menu, Icon} from 'antd';
import OverViewSvg from '../../assets/overview.svg';
import PortfolioSvg from '../../assets/portfolio.svg';
import pintselSvg from '../../assets/pint_sel.svg';
import "../../style/almenu.css";
import {NavLink,Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class AlMenu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Menu
	        onClick={this.handleClick}
	        style={{ width: "100%" }}
	        defaultSelectedKeys={['1']}
	        defaultOpenKeys={['sub1']}
	        mode="inline"
	        className="alcoin-menu"
	      >
	        <Menu.Item key="sub1" className="overview" style={{ paddingLeft:"0px;"}}>
            	<NavLink to='/'>
							<Icon component={OverViewSvg} />
            	<span>概览</span>
							</NavLink>
         	</Menu.Item>
	        <SubMenu key="sub2" className="portfolio" title={<span><Icon component={PortfolioSvg} /><span>投资组合</span></span>}>
	          <Menu.Item key="5">
						  <Link to='/Portfolio'>
	          	<Icon component={pintselSvg} />
            	<span>投资详情</span>
							</Link>
	          </Menu.Item>
	          <Menu.Item key="6">
						 <NavLink to='/Analysis'>
	          	<Icon component={pintselSvg} />
            	<span>数据分析</span>
						 </NavLink>
            </Menu.Item>
	          <Menu.Item key="7">
						 <NavLink to='/'>
	          	<Icon component={pintselSvg} />
            	<span>提醒</span>
						 </NavLink>
	          </Menu.Item>
	        </SubMenu>
	      </Menu>
		)
	}
}