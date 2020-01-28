import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Lyrics from "./components/Tracks/Lyrics";
import { Provider } from "./context";

import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
