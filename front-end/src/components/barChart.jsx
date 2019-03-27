import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
/* import BarChartData from '../data/homeContainer/barChartData'; */
const DataSet = require('@antv/data-set');

/* const sourceData = BarChartData */
  
export default class BarChart extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
		const dv = new DataSet.View().source(this.props.barchartdata);
		dv.transform({
		  type: 'sort',
		  callback(a, b) {
		    return a.marketValue - b.marketValue > 0;
		  },
		});
		const data = dv.rows;
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



