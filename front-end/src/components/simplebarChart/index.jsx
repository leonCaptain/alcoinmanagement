import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as React from 'react';
import barData from '../../data/homeContainer/simplebarChart';

const data = barData
const scale = [{
  dataKey: 'sales',
  tickInterval: 30,
}];


export default class SimplebarChart extends React.Component {
	constructor(props) {
	  super(props);
	}
  render() {
		
		const padding=[ 16, 30, 50, 50];
		const color=this.props.color;
		
    return (
      <Chart  forceFit height={239} data={data} scale={scale} padding={padding}>
        <Tooltip />
        <Axis />
        <Bar position="coin*sales" color={color} size={16} />
      </Chart>
    );
  }
}

