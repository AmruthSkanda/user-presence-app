const createUserStore = () => {
  let activeUsers = {};

  const getAll = () => activeUsers;

  const save = (user) => {
    activeUsers[user.username] = {
      username: user.username,
      lastVisited: user.lastVisited,
      admin: user.isAdmin
    };
    return activeUsers;
  };

  const remove = (username) => {
    if (username in activeUsers)
      return delete activeUsers[username];
    return false;
  };

  return { getAll, save, remove };
};

const UserStore = createUserStore();
export default UserStore;
