export const addUser = (data) => {
  return {
    type: "ADD",
    data: {
      name: data.name,
      email: data.email,
    },
  };
};
export const editUser = (userId, data) => {
  return {
    type: "EDIT",
    data: {
      name: data.name,
      email: data.email,
      userId: userId,
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: "DELETE",
    userId: userId,
  };
};

export const listUser = () => {
  return {
    type: "LIST",
  };
};
