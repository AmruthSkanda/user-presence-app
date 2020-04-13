import * as ACTIONS from "../utils/actions";
import { store } from "../App";
import myFetch from "../utils/request";

export const getUserHistory = async () => {
  try {
    store.dispatch({ type: ACTIONS.FETCH_USER_HISTORY_PENDING });
    const { data } = await myFetch("/users/history", { method: "GET" });
    if (data.status === "OK") {
      store.dispatch({ type: ACTIONS.FETCH_USER_HISTORY_SUCCESS, payload: data.data });
    } else {
      throw data;
    }
  } catch (err) {
    store.dispatch({
      type: ACTIONS.FETCH_USER_HISTORY_SUCCESS,
      payload: []
    });
  }
};