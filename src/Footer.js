import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "abc",
    };
  }
  render() {
    return (
      <div>
        <h3>The content Parent Component: {this.props.headerText}</h3>

        <h1>This is Header Component </h1>
        <h3>
          {" "}
          The content where click to button in Footer Component:
          {this.props.textFromContent}
        </h3>
      </div>
    );
  }
}
export default Footer;
