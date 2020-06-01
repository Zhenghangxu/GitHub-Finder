import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Users from "./components/users/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import function to get users
// import Footer from "./components/layout/Footer";
import { About } from "./components/pages/About";
import User from "./components/pages/User";
import GithubState from "./context/github/GithubState";

import "./App.scss";
import NotFound from "./components/layout/NotFound";
// this is how to import a component

const App = () => {
  // you can use defined property and methods

  return (
    <GithubState>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <Search></Search>
                  <Users></Users>
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About}></Route>
            <Route
              exact
              path="/user/:login"
              render={(props) => <User match={props.match}></User>}
            ></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
