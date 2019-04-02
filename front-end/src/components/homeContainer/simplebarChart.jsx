import * as React from 'react';
import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import barData from '../../data/homeContainer/simplebarChart';

const data = barData
const scale = [{
  dataKey: 'sales',
  tickInterval: 30,
}];

export default class SimplebarChart extends React.Component {
  render() {
    return (
      <Chart  forceFit height={239} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Bar position="coin*sales" color="coin" size={16} />
      </Chart>
    );
  }
}
