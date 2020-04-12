import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Home, Registration, Error, History } from "./containers";
import { createStore } from "./utils/store";
import { NO_MATCH_MSG } from "./utils/constants";
import rootReducer from "./store";

const store = createStore(rootReducer);
const StoreContext = React.createContext();

const App = () => (
  <StoreContext.Provider value={store.getState()}>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/app" />} />
        <Route path="/app" exact component={Login} />
        <Route path="/app/register" component={Registration} />
        <Route path="/app/home" component={Home} />
        <Route path="/app/history" component={History} />
        <Route path="/app/error" component={Error} />
        <Route render={() => <Error message={NO_MATCH_MSG} />} />
      </Switch>
    </Router>
  </StoreContext.Provider >
);

export { store, StoreContext };
export default App;
