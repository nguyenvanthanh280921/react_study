import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "yyyyyyy",
    };
  }
  render() {
    return (
      <div>
        <h1>This is Footer Component </h1>
        <h3>This is content of Footer Component:{this.state.headerText}</h3>
        <h3>This is content of Parent Component: {this.props.text}</h3>
      </div>
    );
  }
}
export default Footer;
