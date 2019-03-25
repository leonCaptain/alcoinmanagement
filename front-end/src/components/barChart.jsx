import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
import BarChartData from '../data/barChartData';

const sourceData = BarChartData
const DataSet = require('@antv/data-set');

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'sort',
  callback(a, b) {
    return a.marketValue - b.marketValue > 0;
  },
});
const data = dv.rows;

export default class BarChart extends React.Component {
  render() {
    return (
      <Chart forceFit height={472} data={data}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Axis dataKey="coin" label={{ offset: 12 }} />
        <Bar position="coin*marketValue" color="coin" size={8}/>
      </Chart>
    );
  }
}



