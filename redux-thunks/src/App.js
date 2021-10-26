import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addUser, deleteUser, editUser, saveUser } from "./action/user";
import { useForm } from "react-hook-form";

function App(props) {
  let { dispatch } = props;
  const users = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const [userSelected, setUserSelected] = useState(null);

  const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const validateEmail = (email, userId) => {
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
  };
  const handleSaveUser = (values) => {
    console.log("values", values);
    let message = null;
    const checkEmail = users.find(
      (user) => user.email.toLowerCase() === values.email.toLowerCase()
    );
    if (checkEmail) {
      message = "Your email is duplicated, please re-login your email";
    }
    if (message) {
      alert(message);
      return false;
    }

    dispatch(saveUser(values));
  };
  const handleEditUser = (userId) => {};
  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };
  const clearSelected = () => {
    setUserSelected(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Study React-redux</h1>
        <form
          onSubmit={
            userSelected
              ? handleSubmit(handleEditUser)
              : handleSubmit(handleSaveUser)
          }
        >
          <label>Name</label>
          <input type="text" {...register("name")} placeholder="Your name" />

          <label>Email Address</label>
          <input type="email" {...register("email")} placeholder="Your email" />
          <button type="submit">Save</button>
          {userSelected && (
            <button type="button" onClick={clearSelected}>
              Unselect
            </button>
          )}
        </form>
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
            {users.map((user, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{user.id}</td>
                  <td className="name">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setUserSelected(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="delete"
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
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
const mapStatesToProps = (state) => ({
  users: state.user,
});
export default connect(mapStatesToProps)(App);
