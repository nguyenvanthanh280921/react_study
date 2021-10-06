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
        <p>1. The content Parrent Component: {this.state.headerText}</p>
        <p>
          {" "}
          2. The content where click to button in Footer Component:
          {this.props.textFromContent}
        </p>
        <h1>This is Header Component </h1>
        <p>3. This is content of Header Component:{this.state.headerText}</p>
        <p>4. This is content of Parent Component: {this.props.headerText}</p>
      </div>
    );
  }
}
export default Content;
