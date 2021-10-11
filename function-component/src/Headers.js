import React, { useState } from "react";
function Headers(props) {
  const { App } = props;
  const [header] = useState("Component Headers");
  return (
    <div>
      <h1>This is Headers Component</h1>
      <h4>3.This is content of Parrent Component: {App}</h4>
      <h4>4.This is content of Header Component: {header}</h4>
    </div>
  );
}
export default Headers;
