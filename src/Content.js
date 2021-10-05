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
        this is Content
        <button onClick={this.callToParent}>Click here</button>
      </div>
    );
  }
}
