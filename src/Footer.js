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
}
export default Footer;
