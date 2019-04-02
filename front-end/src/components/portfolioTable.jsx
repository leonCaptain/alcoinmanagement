import React  from 'react';
import { Table, Button, Popconfirm, Form, Icon, Modal } from 'antd';

import '../style/portfolioTable.css';

const columns = [{
	title: '币种',
	dataIndex: "coinSymbolic",
	key: "coinSymbolic",
	render: (text,record) =>(
		<a href="javascript:;">{text} </a>
	) 
},{
	title: '名称',
	dataIndex: 'coin',
	key: "coin",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '数量',
	dataIndex: 'count',
	key: "count",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '目前价格',
	dataIndex: 'currentPrice',
	key: "currentPrice",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '利润',
	dataIndex: 'profit',
	key: "profit",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '利润率',
	dataIndex: 'profitRate',
	key: "profitRate",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '总价值',
	dataIndex: 'totalValue',
	key: "totalValue",
	render: text => <a href="javascript:;">{text} </a>
},{
	title: '操作',
	dataIndex: 'action',
	key: "action",
	render: (text, record) => (
		<span>
			<a href="javascript:;">Delete</a>
		</span>
	)
}]


export default class PortfolioTable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [{
				key: '1',
				coinSymbolic: 'btc',
				coin: '比特币',
				count: '100',
				currentPrice:'2300',
				profit: '1000',
				profitRate:'20%',
				totalValue: '230000',
				logo:''
			},{
				key: '2',
				coinSymbolic: 'btc',
				coin: '比特币',
				count: '100',
				currentPrice:'2300',
				profit: '1000',
				profitRate:'20%',
				totalValue: '230000',
				log: '',
			},{
				key: '3',
				coinSymbolic: 'btc',
				coin: '比特币',
				count: '100',
				currentPrice:'2300',
				profit: '1000',
				profitRate:'20%',
				totalValue: '230000',
				log: ""
			}],
			loading: false,
			visible: false
		}
	}

	showModel = () =>{
		this.setState({
			visible: true
		});
	}

	handleOk = () =>{
		this.setState({visible: false});
	}

	handleCancel= () =>{
		this.setState({visible: false});
	}

	handleSubmit= () =>{

	}

	render() {
		const {loading, visible } = this.state;
		return (
			<div className="portfolio-table">
 				<div className="label" > 
 					<span className="title" >投资币种列表</span>
 					<Button  className="addCoin" onClick={this.showModel}>添加</Button>
 					<Modal
 						visible={visible}
 						title="添加投资记录"
 						onOk={this.handleOk}
 						onCancel={this.handleCancel}
 						footer={[
 							<Button key="back" onClick={this.handleCancel} className="cancelBtn">
 								取消
 							</Button>,
 							<Button key="submit" type="primary" onClick={this.handleCancel} loading={loading} >
 								提交
 							</Button>
 						]}
 					>
 						<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
 							<Form.Item label="硬币"> 
 								
 							</Form.Item>
 						</Form>
 					</Modal>
 				</div>
				<Table columns={columns} dataSource={this.state.data} />
			</div>
		)
	}
}

