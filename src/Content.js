import React, { Component } from "react";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callToParent = this.callToParent.bind(this);
  }
  callToParent() {
    this.props.setParrentText("abc ");
  }
  render() {
    return (
      <div>
        <button onClick={this.callToParent}>10.Click here</button>
      </div>
    );
  }
}
