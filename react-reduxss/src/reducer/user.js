const initUser = [
  { id: 1, name: "Test", email: "test@gmail.com" },
  { id: 2, name: "Thanhnv", email: "thanhnv@gmail.com" },
  { id: 3, name: "Nguyễn Văn Thành", email: "nguyenvanthanh@gmail.com" },
  { id: 4, name: "Thanhnvvvvv", email: "thanhnvvvvv@gmail.com" },
  { id: 5, name: "Thanhhhhhhh", email: "thanhnhhhhh@gmail.com" },
];

const getIndexOfUser = (users, userId) => {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.id === userId) {
      return i;
    }
  }
  return -1;
};
export const userReducer = (state = initUser, action) => {
  let users = state.slice();
  let nexUserId = users.length + 1;
  switch (action.type) {
    case "ADD":
      users.push({
        id: nexUserId,
        name: action.data.name,
        email: action.data.email,
      });
      break;
    case "EDIT":
      var index = getIndexOfUser(users, action.data.userId);
      if (index !== -1) {
        users[index].name = action.data.name;
        users[index].email = action.data.email;
      }
      break;
    case "DELETE":
      var index = getIndexOfUser(users, action.userId);
      if (index !== -1) {
        users.splice(index, 1);
      }
      break;
    case "LIST":
    default:
      break;
  }
  return users;
};

export default userReducer;
