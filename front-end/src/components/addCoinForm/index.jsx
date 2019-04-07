import React from 'react';
import { Form, Input, Icon } from 'antd';
import CoinSelect from './coinSelect.jsx';

export default class PortfolioForm extends React.Component {
	
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.from.validateFields((err, values) => {
			if(!err) {
				this.props.onSubmit(values);
			}
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: { span: 4 },
			warpperCol: { span: 10}
		};
		return (
			<Form    onSubmit={this.handleSubmit}>
				<Form.Item
					labelAlign="left"
					{...formItemLayout}
					label="硬币"
					style={{}}>
					{getFieldDecorator('select', {
						rules: [
							{ required: true, message: "请选择硬币"}
						],
					})(
						<CoinSelect  className="al-form-item-sel"/>
					)}
				</Form.Item>
				<Form.Item
					labelAlign="left"
					label="建仓价格"
					{...formItemLayout}
					>
		          {getFieldDecorator('price', {
		            rules: [{ required: true, message: "请选择价格" }],
		          })(
		            <Input prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}  style={{"width": "350px"}} placeholder="请输入价格" />
		          )}
		        </Form.Item>

		        <Form.Item
					labelAlign="left"
					label="建仓价格"
					{...formItemLayout}
					>
		          {getFieldDecorator('count', {
		            rules: [{ required: true, message: '请输入数量' }],
		          })(
		            <Input style={{"width": "350px"}} placeholder="请输入数量" />
		          )}
		        </Form.Item>
			</Form>
		)

	}
}
