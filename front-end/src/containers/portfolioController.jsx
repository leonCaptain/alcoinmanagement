import React from 'react';
import {connect} from 'react-redux';
import PageLayout from '../components/pageLayout/index';
import MonitorPanel from '../components/monitorPanel/index';

class PortfolioController extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<PageLayout>
					
				</PageLayout>
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
