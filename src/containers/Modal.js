import React, { Component } from "react";
import AppContext from "../context/AppContext";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      position: "fixed",
      top: "20%",
      right: "20%",
      bottom: "20%",
      left: "20%",
      width: 450,
      height: 400,
      padding: 20,
      boxShadow: "0px 0px 150px 130px rgba(0, 0, 0, 0.5)",
      overflow: "auto",
      background: "#fff"
    };
  }
  static contextType = AppContext;
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    const result = this.context.items.filter(
      (v, i) => this.context.items.indexOf(v) === i
    );
    return (
      <div style={this.styles}>
        <h2 style={{ color: "#9900cc" }}>Your cart</h2>
        <div>
          {result.map((item, i) => (
            <ul key={i}>{item}</ul>
          ))}
        </div>

        <div>
          <button
            style={{
              backgroundColor: "white",
              color: "#9900cc",
              border: "none",
              fontSize: "1em"
            }}
            onClick={this.onClose}
          >
            close
          </button>
        </div>
      </div>
    );
  }
}
