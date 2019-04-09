import React from 'react';
import {connect} from 'react-redux';
import MonitorPanel from '../components/monitorPanel/index';
import PortfolioTable from '../components/portfolioTable.jsx';

class PortfolioController extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
					<MonitorPanel />
					<PortfolioTable />
			</div>	
		)
	}
}

const mapStateToProps = (state) => {
    return {
    
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
      
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioController);
