import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../containers/homeContainer';

let getRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  </Router>
)

export default getRouter;
