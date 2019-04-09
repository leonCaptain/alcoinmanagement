import {BrowserRouter as Router, Route, Switch,Link,HashRouter} from 'react-router-dom';
import Home from '../containers/homeContainer';
import Portfolio from '../containers/portfolioContainer.jsx';
import Analysis from '../containers/dataAnalysisContainer.jsx';
import Analysis1 from '../containers/landingPage.jsx';
import PageLayout from '../components/pageLayout/index.jsx';


let getRouter = () => (
  <HashRouter>
	    <PageLayout>
      <Switch>
				<Route path="/" render={()=>
　　　　　　　　　　<Switch>
　　　　　　　　　　　　<Route exact={true}path='/' component={Home} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Analysis" component={Analysis} />
　　　　　　　　　　</Switch>        
　　　　　　}/>
      </Switch>
			</PageLayout>
  </HashRouter>
)

export default getRouter;
