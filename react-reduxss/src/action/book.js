export const add = (bookId, event) => {
  return {
    type: "ADD",
    data: {
      name: event.target.value,
      email: event.target.value,
      bookId: bookId,
    },
  };
};
export const edit = (bookId, event) => {
  return {
    type: "EDIT",
    data: {
      name: event.target.value,
      email: event.target.value,
      bookId: bookId,
    },
  };
};

export const deleteBook = (bookId) => {
  return {
    type: "DELETE",
    bookId: bookId,
  };
};

export const list = () => {
  return {
    type: "LIST",
  };
};
