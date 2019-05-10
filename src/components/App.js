import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalState from "../context/GlobalState";
import Products from "../containers/Products";
import Cart from "../containers/Cart";

export default class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}
