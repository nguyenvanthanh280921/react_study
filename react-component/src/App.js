import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
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
=======
import React from "react";
import Header from "./Header";
import Content from "./Content";
// import { Component } from "react";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const nameApp = "ParrentApp";
  const [dataFooter, setDataFooter] = useState("");
  const onTitle = (data) => setDataFooter(data);
  return (
    <div className="App">
      <h4>1.The content Parrent Component: {nameApp}</h4>
      <h4>
        2. The content where click to button in Footer Component:
        {dataFooter}
      </h4>
      <Header App={nameApp}></Header>
      <hr />
      <Content App={nameApp} />
      <hr />
      <Footer datafooter={onTitle} App={nameApp}></Footer>
    </div>
  );
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       AppComponent: "Parrent App",
//       text: "",
//       headerText: "Parrent Header",
//     };
//     this.setText = this.setText.bind(this);
//   }
//   setText(text) {
//     this.setState({ text: text });
//   }
//   render() {
//     return (
//       <div className="App">
//         <div>1. The content Parrent Component: {this.state.headerText}</div>
//         <div>
//           2. The content where click to button in Footer Component:{" "}
//           {this.state.text}
//         </div>
//         <Header headerText={this.state.AppComponent} />
//         <hr />
//         <Content
//           setParrentText={this.setText}
//           contentText={this.state.AppComponent}
//           textFromContent={this.state.text}
//         />
//         <hr />
//         <Footer
//           setParrentText={this.setText}
//           contentText={this.state.AppComponent}
//         />
//       </div>
//     );
//   }
// }
>>>>>>> 5024ceb4e942f2e935b62d5109253e49770f7f3a

export default App;
