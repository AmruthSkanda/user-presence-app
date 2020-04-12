import * as ACTIONS from "../utils/actions";
import { store } from "../App";
import Socket from "../utils/socket";

export const getActiveUsers = () => {
  const socket = Socket.getSocket();
  if (socket) {
    store.dispatch({ type: ACTIONS.FETCH_ACTIVE_USERS_PENDING });

    socket.on("activeUsers", (activeUsers) => {
      store.dispatch({ type: ACTIONS.FETCH_ACTIVE_USERS_SUCCESS, payload: activeUsers });
    });
  } else {
    store.dispatch({ type: ACTIONS.FETCH_ACTIVE_USERS_FAILURE, payload: {}, error: "Something went wrong!" });
  }
};
