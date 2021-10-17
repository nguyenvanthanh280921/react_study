export const add = () => {
  return {
    type: "ADD",
  };
};
export const edit = (bookId, event) => {
  return {
    type: "EDIT",
    data: {
      name: event.target.value,
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
