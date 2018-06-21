import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { HashRouter, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";

import PersonStore from "./stores/personStore";

import Home from "./views/Home";
import HomePage from "./views/HomePage";

const stores = {
  personStore: new PersonStore()
};

export default class App extends Component {
  render() {
    return (
      <Provider personStore={new PersonStore()}>
        <HashRouter>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
