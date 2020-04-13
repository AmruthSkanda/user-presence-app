import get from "lodash/get";
import * as ACTIONS from "../utils/actions";
import { store } from "../App";
import { REGISTRATION_ERROR } from "../utils/constants"
import Socket from "../utils/socket";
import myFetch from "../utils/request";

export const login = async (username, password) => {
  try {
    store.dispatch({ type: ACTIONS.LOGIN_PENDING });
    const { data } = await myFetch("/session/login", {
      method: "POST",
      data: { username, password }
    });
    if (data.status === "OK") {
      Socket.create();
      store.dispatch({ type: ACTIONS.LOGIN_SUCCESS, payload: data.data });
    } else {
      throw data;
    }
  } catch (err) {
    store.dispatch({ type: ACTIONS.LOGIN_FAILURE, payload: err });
  }
};

export const signUp = async (username, password, isAdmin = false) => {
  try {
    store.dispatch({ type: ACTIONS.SIGN_UP_PENDING });
    const { data } = await myFetch("/users/register-user", {
      method: "PUT",
      data: { username, password, isAdmin }
    });
    if (data.status === "OK") {
      store.dispatch({ type: ACTIONS.SIGN_UP_SUCCESS, payload: true });
    } else {
      throw data;
    }
  } catch (err) {
    store.dispatch({
      type: ACTIONS.SIGN_UP_FAILURE,
      payload: get(err, "response.data.message", REGISTRATION_ERROR)
    });
  }
};

export const logout = async () => {
  try {
    store.dispatch({ type: ACTIONS.LOGIN_RESET });
    store.dispatch({ type: ACTIONS.LOGOUT_PENDING });
    const { data } = await myFetch("/session/logout", { method: "GET" });
    if (data.status === "OK") {
      Socket.disconnect();
      store.dispatch({ type: ACTIONS.LOGOUT_SUCCESS, payload: true });
      setTimeout(() => {
        store.dispatch({ type: ACTIONS.LOGOUT_RESET });
      }, 3000);
    } else {
      throw data;
    }
  } catch (err) {
    store.dispatch({ type: ACTIONS.LOGOUT_FAILURE });
  }
};
