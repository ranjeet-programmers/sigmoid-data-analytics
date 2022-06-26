import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isUserLoginSelector } from "../pages/login/loginSlice";

const ProtectedRoute = ({ component }) => {
  const isLogin = useSelector(isUserLoginSelector);

  return isLogin ? component : <Navigate to="/login" />;
};

export default ProtectedRoute;
