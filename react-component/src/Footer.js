<<<<<<< HEAD
import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerText: "Footer Parrent",
    };
    this.callToParrent = this.callToParrent.bind(this);
  }
  callToParrent() {
    this.props.setParrentText("ABC");
  }
  render() {
    return (
      <div>
        <h1>This is Footer Component</h1>
        <p>8. This content of Footer Component: {this.state.footerText}</p>
        <p>8. This content of Parent Component: {this.props.contentText}</p>

        <button onClick={this.callToParrent}>10. Click here </button>
      </div>
    );
  }
=======
import React, { useState } from "react";

function Footer(props) {
  const { App } = props;
  const [footer] = useState(" Component Footer ");
  return (
    <div>
      <h1>This is Footer Component</h1>
      <h4>8. This content of Parent Component: {App}</h4>
      <h4>9. This content of Footer Component: {footer} </h4>
      <button onClick="setTitle">click</button>
    </div>
  );
>>>>>>> 5024ceb4e942f2e935b62d5109253e49770f7f3a
}
export default Footer;
