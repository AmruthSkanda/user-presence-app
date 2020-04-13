import React from "react";
import myFetch from "../utils/request";
import { Redirect } from "react-router-dom";

import { store } from '../App';
import { LOGIN_SUCCESS } from '../utils/actions';

const withAuth = (SecureComponent) => (props) => {
  const [isLoading, setLoading] = React.useState(true);
  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    async function checkAuth() {
      try {
        const res = await myFetch("/session/checkToken");
        if (res.status === 200) {
          setLoading(false);
          store.dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
        } else {
          throw res;
        }
      } catch (err) {
        setLoading(false);
        setRedirect(true);
      }
    }

    checkAuth();
  }, []);

  if (isLoading) {
    return <p>Authenticating....</p>
  } else if (redirect) {
    return <Redirect to="/app/error" />
  }

  return (<SecureComponent {...props} />);
};

export default withAuth;
