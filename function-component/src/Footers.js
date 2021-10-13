import React, { useState } from "react";

function Footers(props) {
  const { App, dataFooter } = props;
  const [footer, setTitle] = useState("Component Footers");
  return (
    <div>
      <h1>This is Footers Component</h1>
      <h4>8. This content of Parent Component: {App}</h4>
      <h4>9. This content of Footer Component: {footer} </h4>
      <button onClick={() => dataFooter(setTitle)}>10.click</button>
    </div>
  );
}
export default Footers;
