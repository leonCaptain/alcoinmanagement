import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../containers/homeContainer/index';
let getRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
      </Switch>
  </Router>
)

export default getRouter;
