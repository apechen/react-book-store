import React, { Component } from "react";
import learningreact from "../images/learningreact.png";
import reactbuilding from "../images/reactbuilding.png";
import reactreal from "../images/reactreal.png";
import reactnative from "../images/reactnative.png";
import webapps from "../images/webapps.png";
import AppContext from "../context/AppContext";

const books = [
  { id: 0, src: learningreact, title: "Learning react" },
  {
    id: 1,
    src: reactbuilding,
    title: "React : building modern web applications"
  },
  { id: 2, src: reactreal, title: "React for real" },
  {
    id: 3,
    src: webapps,
    title: "Progressive Web Apps with React"
  },
  {
    id: 4,
    src: reactnative,
    title: "Learning React Native"
  }
];

export default class BookList extends Component {
  static contextType = AppContext;

  render() {
    return books.map(book => {
      return (
        <ul key={book.id}>
          <p
            style={{
              color: "#9900cc",
              fontSize: "1em"
            }}
          >
            {book.title}
          </p>
          <img alt=" " src={book.src} style={{ width: 150, height: 170 }} />
          <button
            style={{
              backgroundColor: "white",
              color: "#9900cc",
              border: "none",
              fontSize: "1em"
            }}
            onClick={e => {
              this.props.showModal(e);
              this.context.addItem(book.title);
            }}
          >
            {" "}
            Buy{" "}
          </button>
        </ul>
      );
    });
  }
}
