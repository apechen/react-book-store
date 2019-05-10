import React, { Component } from "react";
import AppContext from "./AppContext";

export default class GlobalState extends Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState({
      items: [...this.state.items, item]
    });
  };
  removeItem = item => {
    let newArray = this.state.items.filter(el => el !== item);
    this.setState({
      items: [...newArray]
    });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
