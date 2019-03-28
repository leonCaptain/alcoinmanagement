import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';

const DataSet = require('@antv/data-set');
  
export default class BarChart extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
		
		const dv = new DataSet.View().source(this.props.barchartdata);
		const data = dv.rows;
		
		dv.transform({
		  type: 'sort',
		  callback(a, b) {
		    return a.marketValue - b.marketValue > 0;
		  },
		});

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



