import { Component } from "react";

const initBook = [
  { id: 1, name: "I love you so", status: 1 },
  { id: 2, name: "My dad love me", status: 1 },
  { id: 3, name: "You!!!!", status: 0 },
];
var nexBookId = initBook.length;
const getIndexOfBook = (books, bookId) => {
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    if (book.id === bookId) {
      return i;
    }
  }
  return -1;
};
export const bookReducer = (state = initBook, action) => {
  let books = state.slice();

  switch (action.type) {
    case "Add":
      nexBookId++;
      books.push({ id: nexBookId, name: "", status: 0 });
      break;
    case "Edit":
      var bookId = getIndexOfBook(books, action.data.bookId);
      if (bookId != -1) {
        books[bookId].name = action.data.name;
        books[bookId].status = action.data.status;
      }
      break;
    case "Delete":
      var bookId = getIndexOfBook(books, action.bookId);
      if (bookId != -1) {
        books.splice(bookId, 1);
      }
      break;
    case "List":
    default:
      break;
  }
  return books;
};
export default bookReducer;