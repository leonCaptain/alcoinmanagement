import { Chart, Tooltip, Axis, Line, Point } from 'viser-react';
import * as React from 'react';
import LineChartData from '../../data/homeContainer/LineChartData';

const data = LineChartData
const scale = [{
					dataKey: 'value',
					min: 0,
      },{
					dataKey: 'year',
					min: 0,
					max: 1,
      }];

export default class lineChart extends React.Component {
  render() {
    return (
      <Chart  width={600} height={400} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Line position="year*value" />
        <Point position="year*value" shape="circle"/>
      </Chart>
    );
  }
}
