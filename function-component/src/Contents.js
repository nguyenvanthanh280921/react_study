import React, { useState } from "react";
function Contents(props) {
  const { App } = props;
  const [content] = useState("Component Content");

  return (
    <div>
      <h1>This is Content Component</h1>
      <h4>5. This is content of Content Component: {App}</h4>
      <h4>6. This is content of Content Component: {content} </h4>
      <h4>7. This is content where click to button in Footer Component:</h4>
    </div>
  );
}
export default Contents;
