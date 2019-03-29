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
		const padding=[ 16, 30, 20, 50];
		
		dv.transform({
		  type: 'sort',
		  callback(a, b) {
		    return a.marketValue - b.marketValue > 0;
		  },
		});

    return (
      <Chart forceFit height={472} data={data} padding={padding}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Axis dataKey="coin" label={{ offset: 12 }} />
        <Bar position="coin*marketValue" color={['coin',[ '#9FA8DA','#3FCDFF','#FFD769','#EB9C00','#DD2727' ]]} size={8}/>
      </Chart>
    );
  }
}



