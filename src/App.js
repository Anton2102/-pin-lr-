import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './containers/Home/index.js'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/firstExample">
            <About />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}