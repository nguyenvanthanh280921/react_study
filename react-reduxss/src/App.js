import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, deleteUser, editUser, saveUser } from "./action/user";

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  validateEmail(email, userId) {
    let message = "";

    if (email == "" || email == undefined) {
      return "Please enter your full email";
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validateEmail = re.test(String(email).toLowerCase());
    if (validateEmail == false) {
      return "Please enter your correct email information!!!";
    }
    let users = this.props.users;
    if (users.length) {
      for (let i = 0; i < users.length; i++) {
        if (userId == 0 && users[i].email == email) {
          return "Your email is duplicated, please re-login your email";
        }
        if (userId != 0) {
          if (userId != users[i].id && users[i].email == email) {
            return "Your email is duplicated, please re-login your email";
          }
        }
      }
    }
    return message;
  }
  saveUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let userId = document.getElementById("user_id").value;
    if (name == "" || name == undefined) {
      alert("Please enter your full name");
      return false;
    }
    let message = this.validateEmail(email, userId);
    if (message != "") {
      alert(message);
      return false;
    }

    this.props.dispatch(saveUser({ name: name, email: email, id: userId }));
  }
  handleEdit(userId) {
    let users = this.props.users;
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.id == userId) {
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("user_id").value = userId;
      }
    }
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
          <input type="hidden" id="user_id" defaultValue={0} />

          <label>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your emali"
          />
          <button onClick={this.saveUser}>Save</button>
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
                      <button onClick={this.handleEdit.bind(this, user.id)}>
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
