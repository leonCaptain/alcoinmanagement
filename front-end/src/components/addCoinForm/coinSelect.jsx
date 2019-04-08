import {Select, Spin } from 'antd';
import _ from 'lodash';

const Option = Select.Option;

export default class CoinSelect extends React.Component {
	constructor(props) {
		super(props);
		this.lastFetchId = 0;
	}

	//hook
	componentDidMount() {
		this.fetchCoin();
	}

	state = {
		data: [],
		value: [],
		fething: false,
	}

	handleChange = (value) => this.props.handleChange(value)
	

	fetchCoin = (value) => {
		this.lastFetchId +=1;
		const fetchId =  this.lastFetchId;
		this.setState({data: [], fetching: true});
		fetch('http://localhost:3000/coin')
			.then(response => response.json())
			.then((body) => {
				if(fetchId !== this.lastFetchId) {
					return;
				}
				const data = body.map(c =>({
					id: c.id,
					name: c.name,
					symbolic: c.symbolic					
				}));

				//setState 触发页面更新
				this.setState({ data, fetching: false});
			});
		
	}

	render() {
		let {fetching, data} = this.state;
		return (
			<Select
				showSearch 
				placeholder="请选则一款硬币"
				optionFilterProp="children"
				notFoundContent={fetching ? <Spin size="small" /> : null}
				filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
				onSearch={this.fetchCoin}
        		className={this.props.className}
        		style={{"width": "350px"}}
				> 
				{data.map(d=> <Option key={d.id}>{d.symbolic}</Option>)}
			</Select>
		)
	}

}
