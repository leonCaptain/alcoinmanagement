import { Chart, Tooltip, Axis, Line, Point } from 'viser-react';
import {Icon} from 'antd';
import * as React from 'react';
import './index.scss';

const data = [
  { day: '3/23', value: '$330' },
  { day: '3/24', value: '$340' },
  { day: '3/25', value: '$342' },
  { day: '3/26', value: '$345' },
  { day: '3/27', value: '$350' },
  { day: '3/28', value: '$360' },
  { day: '3/29', value: '$370' },
];

const scale = [{
  dataKey: 'value',
  min: 0,
},{
  dataKey: 'day',
  min: 0,
  max: 1,
}];

export default class Brokenline extends React.Component {
  render() {
	  
	const padding=[ 34, 21, 46, 56];
	
    return (
	  <div className="brokenline">
	  	<div className="brokenline-Header">
	  	<p style={{float: 'left' }}>跌幅榜前5(24h)</p>
	  	<Icon type="ellipsis" style={{float: 'right' ,marginTop:'12px',marginRight:'16px' }}/>
	  	</div>
		<Chart forceFit height={199} data={data} scale={scale}padding={padding}>
			<Tooltip />
			<Axis />
			<Line position="day*value" />
			<Point position="day*value" shape="circle"/>
		</Chart>
	  </div>
    );
  }
}
