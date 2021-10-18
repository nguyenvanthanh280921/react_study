import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { add, deleteBook, edit } from "./action/book";

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  add() {
    this.props.dispatch(add());
  }
  edit(bookId, event) {
    this.props.dispatch(edit(bookId, event));
  }
  deleteBook(bookId) {
    this.props.dispatch(deleteBook(bookId));
  }
  render() {
    const books = this.props.books;

    return (
      <div className="App">
        <edit />
        <div className="container">
          <form className="form-app">
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
            <button onClick={this.add}>Add</button>
            <table border="1" className="table-form">
              <thead>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </thead>
              <tbody>
                {books.map((book, key) => {
                  return (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td className="name">{book.name}</td>
                      <td>{book.email}</td>
                      <td>
                        <button type="edit" onClick={() => this.edit()}>
                          {" "}
                          Edit
                        </button>
                        <button
                          type="delete"
                          onClick={this.deleteBook.bind(this, book.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
const mapStatesToProps = (state) => {
  return {
    books: state.book,
  };
};
export default connect(mapStatesToProps)(App);
