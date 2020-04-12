import React, { useState, useEffect } from "react";
import myFetch from "../utils/request";
import { Redirect } from "react-router-dom";

const withAuth = (SecureComponent) => (props) => {
  const [isLoading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await myFetch("/session/checkToken");
        if (res.status === 200) {
          setLoading(false);
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
    return <p>Loading....</p>
  } else if (redirect) {
    return <Redirect to="/app/error" />
  }

  return (<SecureComponent {...props} />);
};

export default withAuth;
