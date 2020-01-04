import React, { Component } from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeComponent extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// “When should I use a function and when a class?”

export { Welcome, WelcomeComponent };
