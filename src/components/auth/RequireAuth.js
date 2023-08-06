import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  if (!userInfo?._id) {
    //navigate to login
    return <Navigate to="/" replace />;
  }

  return children;
};
