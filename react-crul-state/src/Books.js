import React, { Component } from "react";

class Books extends Component {
  state = {
    listBook: [
      { id: 1, title: "I love you so" },
      { id: 2, title: "My dad love me" },
      { id: 3, title: "You!!!!" },
    ],
  };
  handleDeleteBook = (book) => {
    let currentBook = this.state.listBook;
    currentBook = currentBook.filter((item) => item.id !== book.id);
    this.setState({
      listBook: currentBook,
    });
  };
  render() {
    let { listBook } = this.state;
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
              {listBook &&
                listBook.length > 0 &&
                listBook.map((item, index) => {
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
          <button>ADD BOOK</button>
        </div>
      </div>
    );
  }
}
export default Books;
