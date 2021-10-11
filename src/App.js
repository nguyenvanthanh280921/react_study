import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Headers from "./Headers.js";
import Content from "./Headers.js";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppComponent: "Parrent App",
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
        <div>1. The content Parrent Component: {this.state.AppComponent}</div>
        <div>
          2. The content where click to button in Footer Component:{" "}
          {this.state.text}
        </div>
        <Headers headerText={this.state.AppComponent} />
        <hr />
        <Content
          setParrentText={this.setText}
          contentText={this.state.AppComponent}
          textFromContent={this.state.text}
        />
        <hr />
        <Footer
          setParrentText={this.setText}
          contentText={this.state.AppComponent}
        />
      </div>
    );
  }
}

export default App;
