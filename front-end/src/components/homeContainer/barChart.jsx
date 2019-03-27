import * as React from 'react';
import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import BarChartData from '../../data/homeContainer/barChartData';
const DataSet = require('@antv/data-set');

const sourceData = BarChartData
const dv = new DataSet.View().source(sourceData);
const data = dv.rows;

dv.transform({
  type: 'sort',
  callback(a, b) {
    return a.marketValue - b.marketValue > 0;
  },
});

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
