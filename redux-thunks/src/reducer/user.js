const jsonUsers = require("../api/users.json");

const getIndexOfUser = (users, userId) => {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.id == userId) {
      return i;
    }
  }
  return -1;
};

const initUser = jsonUsers;

const userReducer = (state = initUser, action) => {
  let users = state.slice();
  let nexUserId = users.length + 1;
  const { type, payload } = action;
  switch (type) {
    case "SAVE_USER":
      return [...state, { ...payload, id: nexUserId }];
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
      return state;
    default:
      return state;
  }
  return users;
};

export default userReducer;
