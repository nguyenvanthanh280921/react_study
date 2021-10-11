import { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Parrent Header",
    };
  }
  render() {
    return (
      <div>
        <h1>This is Header Component</h1>
        <p>3.This is content of Header Component: {this.state.headerText}</p>
        <p>4.This is content of Parrent Component: {this.props.headerText}</p>
      </div>
    );
  }
}
export default Content;
