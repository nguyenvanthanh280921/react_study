import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser, editUser } from "./action/user";

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  addUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name == "" || name == undefined) {
      alert("Please enter your full name");
      return false;
    }
    if (email == "" || email == undefined) {
      alert("Please enter your full email");
      return false;
    }
    this.props.dispatch(addUser({ name: name, email: email }));
  }
  editUser(userId, event) {
    this.props.dispatch(editUser(userId, event));
  }
  deleteUser(userId) {
    this.props.dispatch(deleteUser(userId));
  }
  render() {
    const users = this.props.users;

    return (
      <div className="App">
        <div className="container">
          <h1>Study React-redux</h1>
          <label>Name</label>
          <input type="text" id="name" placeholder="Your name" />
          <label>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your emali"
          />
          <button onClick={this.addUser}>Add</button>
          <table border="1" className="table-form">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td className="name">{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button type="edit" onClick={() => this.editUser()}>
                        {" "}
                        Edit
                      </button>
                      <button
                        type="delete"
                        onClick={this.deleteUser.bind(this, user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStatesToProps = (state) => {
  return {
    users: state.user,
  };
};
export default connect(mapStatesToProps)(App);
