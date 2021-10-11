import React, { Component } from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentText: "Content Component",
    };
    this.callToParrent = this.callToParrent.bind(this);
  }
  callToParrent() {
    this.props.setParrentText("abcd");
  }
  render() {
    return (
      <div>
        <h1>This Content Component</h1>
        <p>5. This is content of content Component: {this.state.contentText}</p>
        <p>6. This is content of content Component: {this.props.contentText}</p>
        <p>
          7. This is content where click to button in Footer Component:
          {this.props.textFromContent}
        </p>
      </div>
    );
  }
}
export default Content;
