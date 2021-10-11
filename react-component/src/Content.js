<<<<<<< HEAD
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
=======
import React, { useState } from "react";

function Content(props) {
  const { App } = props;

  const [title] = useState("Component Content");
  return (
    <div>
      <h1>This is Content Component</h1>
      <h4>5. This is content of Content Component: {App}</h4>
      <h4>6. This is content of Content Component: {title} </h4>
      <h4>7. This is content where click to button in Footer Component:</h4>
    </div>
  );
}

>>>>>>> 5024ceb4e942f2e935b62d5109253e49770f7f3a
export default Content;
