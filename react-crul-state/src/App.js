import "./App.css";
import React, { Component } from "react";
import { ListBook } from "./book";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Book Manager</h1>
          <table border="1" className="table-form">
            <thead>
              <th>ID</th>
              <th>Book Name</th>
              <th>Delete</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="name">
                  <input type="text" />
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button>Add New</button>
        </div>
      </div>
    );
  }
}

export default App;
