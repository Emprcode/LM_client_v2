import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    //navigate to login
    return <Navigate to="/" replace />;
  }

  return children;
};
