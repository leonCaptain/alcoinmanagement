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
			labelCol: { span: 3 },
			warpperCol: { span: 1}
		};
		return (
			<Form    onSubmit={this.handleSubmit} style={{ "width": "440px", "height": "310px"}}>
				<Form.Item
					className="al-form-item"
					labelAlign="left"
					{...formItemLayout}
					label="硬币">
					{getFieldDecorator('select', {
						rules: [
							{ required: true, message: "请选择硬币"}
						],
					})(
						<CoinSelect  className="al-form-item-sel"/>
					)}
				</Form.Item>
			</Form>
		)

	}
}
