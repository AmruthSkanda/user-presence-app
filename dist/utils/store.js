"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var createUserStore = function createUserStore() {
  var activeUsers = {};

  var getAll = function getAll() {
    return activeUsers;
  };

  var save = function save(user) {
    activeUsers[user.username] = {
      username: user.username,
      lastVisited: user.lastVisited
    };
    return activeUsers;
  };

  var remove = function remove(username) {
    if (username in activeUsers) return delete activeUsers[username];
    return false;
  };

  return {
    getAll: getAll,
    save: save,
    remove: remove
  };
};

var UserStore = createUserStore();
var _default = UserStore;
exports["default"] = _default;