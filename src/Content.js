import React, { Component } from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: "cccc",
    };
    this.callToParrent = this.callToParrent.bind(this);
  }
  callToParrent() {
    this.props.setParrentText("abc");
  }
  render() {
    return (
      <div>
        <h1>This is Content Component </h1>
        <p>5. This is content of Content Component:{this.state.contentText}</p>
        <p>6. This is content of Parent Component: {this.state.text}</p>
        <p>
          7. This is content where click to button in Footer Component:
          {this.props.textFromContent}{" "}
        </p>
      </div>
    );
  }
}
