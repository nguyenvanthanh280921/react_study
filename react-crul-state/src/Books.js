import React, { Component } from "react";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBook: [
        { id: 1, title: "I love you so" },
        { id: 2, title: "My dad love me" },
        { id: 3, title: "You!!!!" },
      ],
    };
    this.addBook = this.addBook.bind(this);
  }

  handleDeleteBook = (book) => {
    let currentBook = this.state.listBook;
    currentBook = currentBook.filter((item) => item.id !== book.id);
    this.setState({
      listBook: currentBook,
    });
  };
  handleEditBook = (bookId, event) => {
    console.log(bookId);
    let books = this.state.listBook.slice();
    for (let i = 0; i < books.legend; i++) {
      let book = books[i];
      if (book.id == bookId) {
        books[i].title = event.target.value;
        this.setState({ listBook: books });
      }
    }
  };

  addBook() {
    let books = this.state.listBook.slice();
    let newBook = { id: books.length + 1, title: "" };
    books.push(newBook);
    this.setState({ listBook: books });
  }

  render() {
    let { listBook } = this.state;
    return (
      <div className="books">
        <div className="container">
          <h1>Book Manager</h1>
          <table border="1" className="table-form">
            <thead>
              <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {listBook &&
                listBook.length > 0 &&
                listBook.map((item, index) => {
                  return (
                    <tr className="book-child" key={item.id}>
                      <td>{item.id}</td>
                      <td className="name">
                        <input
                          type="text"
                          defaultValue={item.title}
                          onChange={(event) =>
                            this.handleEditBook(item.id, event)
                          }
                        />
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => this.handleDeleteBook(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button onClick={this.addBook}>ADD BOOK</button>
          <table border="1" className="table-form">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {this.state.listBook.map((book, key) => {
                return (
                  <tr key={key}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
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
export default Books;
