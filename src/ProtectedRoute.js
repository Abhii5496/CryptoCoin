import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./Conntext/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = UserAuth();

  return user ? <Component {...rest} /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
