import React from "react";
// import PropTypes from "prop-types";

import { Error } from "../components";
// import { withStore } from "../hocs";

const ErrorContainer = (props) => {
  let msg = "Invalid session. Please login again!";
  return <Error message={msg} {...props} />;
};

export default ErrorContainer;