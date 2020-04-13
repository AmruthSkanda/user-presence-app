const env = process.env.NODE_ENV;
const createStore = (reducer) => {
  let state;
  const listeners = [];

  const getState = () => {
    return state;
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return listeners.filter(l => listener !== l);
  }

  const dispatch = (action) => {
    state = reducer(state, action);
    if (env === "development") {
      console.info("My Store updated: ", state);
    }
    listeners.forEach(listener => listener())
  }

  dispatch({});

  return { getState, subscribe, dispatch };
};

const combineReducers = (reducerMap) => (state = {}, action) => {
  return Object.keys(reducerMap)
    .reduce((nextState, key) => {
      nextState[key] = reducerMap[key](
        state[key],
        action
      );
      return nextState;
    }, {});
};

export { createStore, combineReducers };