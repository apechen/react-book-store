import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

export default class Cart extends Component {
  static contextType = AppContext;

  render() {
    const newResult = this.context.items.reduce(function(el, i) {
      if (typeof el[i] == "undefined") {
        el[i] = 1;
      } else {
        el[i] += 1;
      }
      return el;
    }, {});

    return (
      <div>
        <p style={{ color: "#9900cc" }}>Cart</p>
        {this.context.items.length === 0 ? <p>Your cart is empty</p> : ""}
        <div>
          {Object.keys(newResult).map((item, i) => (
            <ul key={i}>
              {item} qty {newResult[item]}
              <button
                style={{
                  backgroundColor: "white",
                  color: "#9900cc",
                  border: "none",
                  fontSize: "1em"
                }}
                onClick={() => this.context.removeItem(item)}
              >
                Remove
              </button>
            </ul>
          ))}
        </div>

        <Link to="/">Home</Link>
      </div>
    );
  }
}
