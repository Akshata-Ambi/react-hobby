import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundry = () => {
 const error = useRouteError()
 console.log(error, 'err')
  return <h2>{error.data}</h2>;
};

export default ErrorBoundry;
