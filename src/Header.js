import React, { useState } from "react";

function Header(props) {
  const { App } = props;
  const [header] = useState("Component Header");
  return (
    <div>
      <h1>This is Header Component</h1>
      <h4>3.This is content of Parrent Component: {App}</h4>
      <h4>4.This is content of Header Component: {header}</h4>
    </div>
  );
}

export default Header;
