import React from 'react';
import { Menu, Icon} from 'antd';
import './index.css';
import OverViewSvg from '../../../assets/overview.svg';
import PortfolioSvg from '../../../assets/portfolio.svg';
import pintselSvg from '../../../assets/pint_sel.svg';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class AlSider extends React.Component {
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
	      >
	        <Menu.Item key="sub1">
            	<Icon component={OverViewSvg} />
            	<span>概览</span>
         	</Menu.Item>
	        <SubMenu key="sub2" title={<span><Icon component={PortfolioSvg} /><span>投资组合</span></span>}>
	          <Menu.Item key="5">
	          	<Icon component={pintselSvg} />
            	<span>投资详情</span>
	          </Menu.Item>
	          <Menu.Item key="6">
	          	<Icon component={pintselSvg} />
            	<span>数据分析</span>
              </Menu.Item>
	          <Menu.Item key="7">
	          	<Icon component={pintselSvg} />
            	<span>提醒</span>
	          </Menu.Item>
	        </SubMenu>
	      </Menu>
		)
	}
}