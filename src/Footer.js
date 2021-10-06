import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerText: "yyyyyyy",
    };
    this.callToParrent = this.callToParrent.bind(this);
  }
  callToParrent() {
    this.props.setParrentText("abc");
  }
  render() {
    return (
      <div>
        <h1>This is Footer Component </h1>
        <p>8. This is content of Footer Component:{this.state.footerText}</p>
        <p>9. This is content of Parent Component: {this.props.footerText}</p>
        <button onClick={this.callToParrent}>10.Clickhere</button>
      </div>
    );
  }
}
export default Footer;
