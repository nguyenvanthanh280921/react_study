import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "vvvv",
    };
  }
  render() {
    return (
      <div class>
        <h3>1.The content Parent Component: {this.state.headerText}</h3>
        <h3>
          {" "}
          2.The content where click to button in Footer Component:
          {this.props.textFromContent}
        </h3>
        <h1>This is Header Component </h1>
      </div>
    );
  }
}
export default Content;
