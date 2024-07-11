import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./Conntext/AuthContext";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = UserAuth();
  return user ? <Navigate to="/" /> : <Component {...rest} />;
};

export default PublicRoute;
