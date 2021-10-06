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
      app: "abc",
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
        <p>1. The content Parrent Component: {this.state.app}</p>
        <p>
          {" "}
          2. The content where click to button in Footer Component:
          {this.props.textFromContent}
        </p>
        <Header headerText={this.state.app} textFromContent={this.state.text} />
        <hr />
        <Content
          setParrentText={this.setText}
          contentText={this.state.app}
          textFromContent={this.state.text}
        />
        <hr />
        <Footer setParrentText={this.setText} />
      </div>
    );
  }
}

export default App;
