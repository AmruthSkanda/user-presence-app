import React from "react";

import { Error } from "../components";

const ErrorContainer = (props) => {
  let msg = "Invalid session. Please login again!";
  return <Error message={msg} {...props} />;
};

export default ErrorContainer;