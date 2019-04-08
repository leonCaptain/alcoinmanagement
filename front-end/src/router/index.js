import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../containers/homeContainer';
import Portfolio from '../containers/portfolioContainer.jsx';
import DataAnalysis from '../containers/dataAnalysisContainer.jsx';
import Almenu from '../components/alMenu/index.jsx';

let getRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Portfolio} />
				<Route path="/DA" component={DataAnalysis} />
      </Switch>
  </Router>
)

export default getRouter;
