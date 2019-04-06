import React from 'react';
import { Form } from 'antd';
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
			labelCol: { span: 6 },
			warpperCol: { span: 14}
		};
		const
		return (
			<Form  {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item
					label="coin">
					{getFieldDecorator('select', {
						rules: [
							{ required: true, message: "请选择硬币"}
						],
					})(
						<CoinSelect />
					)}
				</Form.Item>
			</Form>
		)

	}
}
