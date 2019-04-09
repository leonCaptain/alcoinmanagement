import React from 'react';
import {connect} from 'react-redux';
import PageLayout from '../components/pageLayout/index';
import MonitorPanel from '../components/monitorPanel/index';
import Brokenline from '../components/brokenLine/index';

class DataAnalysisContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
					<MonitorPanel />
					<Brokenline/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataAnalysisContainer);
