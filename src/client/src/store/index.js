import { combineReducers } from "../utils/store";
import { login, signUp, logout } from "./auth";
import { activeUsers, userHistory } from "./users";

const rootReducer = combineReducers({
  login, signUp, logout,
  activeUsers,
  userHistory
});

export default rootReducer;