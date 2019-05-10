import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import Modal from "./Modal";
import AppContext from "../context/AppContext";

const Heading = () => {
  return <h1 style={{ color: "#9900cc" }}>React Book Store</h1>;
};

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.styles = {
      display: "flex"
    };
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  static contextType = AppContext;
  render() {
    return (
      <div>
        <Link to="/cart">Cart</Link>
        <Heading />
        <div style={this.styles}>
          <BookList showModal={this.showModal} show={this.state.show} />
        </div>
        <Modal onClose={this.showModal} show={this.state.show} />
      </div>
    );
  }
}
