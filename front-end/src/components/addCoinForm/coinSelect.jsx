import {Select } from 'antd';
import debounce from 'lodash/debounce';

const Option = Select.Option;

export default class CoinSelect extends React.Component {
	constructor(props) {
		super(props);
		this.lastFetchId = 0;
		this.fetchCoin = debounce(this.fetchCoin, 800);
	}

	state = {
		date: [],
		value: [],
		fething: false,
	}

	render() {
		return (
			<Select
				showSearch 
				placeholder="请选则一款硬币"
				optionFilterProp="children"
				filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
				> 
				{}
			</Select>
		)
	}

}
