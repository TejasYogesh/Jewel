import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;