import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

const PrivateRoute = props => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Route {...props} />{" "}
      </>
    );
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
