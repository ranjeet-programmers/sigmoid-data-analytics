import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./features/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute component={<Dashboard />} />} />
    </Routes>
  );
};

export default App;
