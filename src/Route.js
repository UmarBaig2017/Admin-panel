import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import AdminSignIn from "./components/Admin";
import Practitioner from "./components/1";
import Parents from './components/3'
import Dashboard from "./components/dashboard"
import Dash from './components/dash'
import Newdash from './components/Newdash'
import history from "./History";
import Order from './components/2'
import Orders from './components/Orders'

// export const history = createBrowserHistory()

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route  path="/signin" component={AdminSignIn} />
          <Route exact path="/" component={Orders} />
          <Route  path="/Practitioner" component={Practitioner} />
          <Route  path="/parent" component={Parents} />
        </div>
      </Router>
    );
  }
}

export default Routers;
