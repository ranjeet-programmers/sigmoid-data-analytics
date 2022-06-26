import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { isUserLoginSelector } from "./loginSlice";

const Login = () => {
  const isLogin = useSelector(isUserLoginSelector);

  return isLogin ? <Navigate to={"/"} /> : <LoginForm />;
};

export default Login;
