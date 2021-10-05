import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import { Component } from "react";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "abc",
      text: "",
    };
    this.setText = this.setText.bind(this);
  }
  setText(text) {
    this.setState({ text: text });
  }
  render() {
    return (
      <div className="App">
        <Header
          headerText={this.state.header}
          textFromContent={this.state.text}
        />
        <div>
          <span>DATA from Content Component: {this.state.text}</span>
        </div>
        <Footer setParrentText={this.setText} />

        <Content setParrentText={this.setText} />
      </div>
    );
  }
}

export default App;
