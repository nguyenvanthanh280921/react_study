import React, { useState } from "react";

function Content(props) {
  const { App } = props;

  const [title] = useState("Component Content");
  return (
    <div>
      <h1>This is Content Component</h1>
      <h4>5. This is content of Content Component: {App}</h4>
      <h4>6. This is content of Content Component: {title} </h4>
      <h4>7. This is content where click to button in Footer Component:</h4>
    </div>
  );
}

export default Content;
