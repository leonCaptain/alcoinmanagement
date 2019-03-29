import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../containers/homeContainer.jsx';
import Portfolio from '../containers/portfolioController.jsx';


let getRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Portfolio} />
      </Switch>
  </Router>
)

export default getRouter;
