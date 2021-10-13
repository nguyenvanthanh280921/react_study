import React, { Component } from "react";
import addBook from "./AddBook";

class Books extends Component {
  state = {
    Books: [
      { id: 1, title: "I love you so" },
      { id: 2, title: "My dad love me" },
      { id: 3, title: "You!!!!" },
    ],
  };
  addBook = (book) => {
    this.setState({
      Books: [...this.state.Books, book],
    });
  };
  handleDeleteBook = (book) => {
    let currentBook = this.state.Books;
    currentBook = currentBook.filter((item) => item.id !== book.id);
    this.setState({
      Books: currentBook,
    });
  };
  render() {
    let { Books } = this.state;
    return (
      <div className="books">
        <div className="container">
          <h1>Book Manager</h1>
          <table border="1" className="table-form">
            <thead>
              <th>ID</th>
              <th>Book Name</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {Books &&
                Books.length > 0 &&
                Books.map((item, index) => {
                  return (
                    <tr className="book-child" key={item.id}>
                      <td>{index + 1}</td>
                      <td className="name">{item.title}</td>
                      <button
                        className="delete"
                        onClick={() => this.handleDeleteBook(item)}
                      >
                        Delete
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <addBook addBook={this.addBook} />
        </div>
      </div>
    );
  }
}
export default Books;
