import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
