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
}
export default Footer;
