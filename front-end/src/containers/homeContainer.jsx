import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Menu, Breadcrumb,Icon,Row,Col,Avatar} from 'antd';
import LineChart from '../components/lineChart/index.jsx';
import BarChart from '../components/barChart/index.jsx';
import SimplebarChart from '../components/simplebarChart/index.jsx';
import Warning from '../components/warning/index.jsx';
import PositionWarning from '../components/positionwarning/index.jsx';
import CoinWarning from '../components/coinwarning/index.jsx';
import PageLayout from '../components/pageLayout/index';
import '../style/homeContainer.css';


class HomeContainer extends Component {
	constructor(props) {
		super(props);
	}
    render(){
    return (
			<div>
				<Layout className="home-Content">
						<div className="content-Warning">
								<Warning projectwarninglist={this.props.projectwarningdata}></Warning>
								<CoinWarning coinwarninglist={this.props.coinwarningdata}></CoinWarning>
								<PositionWarning positionwarninglist={this.props.positionwarningdata}></PositionWarning>
						</div>
						<div className="content-Chart">
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>交易量排行榜前10(24h)</p>
								<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px'  }}/>
								</div>
								<BarChart barchartdata={this.props.barchartdata}></BarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>涨幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right',marginTop:'12px',marginRight:'16px'  }}/>
								</div>
								<SimplebarChart color={['coin',[ '#15AD3F','#1AD74D','#79EF99','#29DEDF','#92FEFF' ]]}></SimplebarChart>
							</div>
							<div className="chart barchart">
								<div className="chart-Header">
								<p style={{float: 'left' }}>跌幅榜前5(24h)</p>
								<Icon type="ellipsis" style={{float: 'right' ,marginTop:'12px',marginRight:'16px' }}/>
								</div>
								<SimplebarChart color={['coin',[ '#DD2727','#FF5D5D','#FFA1A1','#FFC554','#FFE172' ]]}></SimplebarChart>
							</div>
						</div>
				</Layout>
		</div>
        )
    }
}
const mapStateToProps = (state) => {
	return {
		barchartdata:state.home.barchartdata,
		projectwarningdata:state.home.projectwarning,
		positionwarningdata:state.home.positionwarning,
		coinwarningdata:state.home.coinwarning
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => {
            dispatch(increment())
        },
		/* loadUser:()=>{
			dispatch(loadUser())
		}, */
    }
};
//
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
