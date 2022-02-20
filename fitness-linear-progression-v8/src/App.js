import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Routine from "./components/pages/Routine";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import AppState from "./context/AppState";

import "./App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/routine/:routineId' component={Routine} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppState>
  );
};

export default App;
