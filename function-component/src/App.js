import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Headers from "./Headers";
import Contents from "./Contents";
import Footers from "./Footers";

function App() {
  const ParrentApp = "Parrent App";
  const [dataFooter, setDataFooter] = useState("");
  const Title = (data) => setDataFooter(data);
  return (
    <div className="App">
      <h4>1. The content Parrent Component: {ParrentApp}</h4>
      <h4>
        2. The content where click to button in Footer Component: {dataFooter}
      </h4>
      <Headers App={ParrentApp} />
      <hr />
      <Contents App={ParrentApp} />
      <hr />
      <Footers dataFooter={Title} App={ParrentApp} />
    </div>
  );
}

export default App;
