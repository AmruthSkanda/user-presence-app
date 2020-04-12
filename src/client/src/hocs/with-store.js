import React, { useContext, useEffect } from "react";
import { store, StoreContext } from "../App";

const withStore = (stateMapper = () => ({})) => (ContainerComponent) => {
  return (props) => {
    const state = useContext(StoreContext);
    useEffect(() => {
      console.log("REMOUNTING....")
    }, [])
    const pageState = stateMapper && stateMapper(state);

    return (
      <ContainerComponent {...pageState} {...props} dispatch={store.dispatch} />
    );
  };
};

export default withStore;