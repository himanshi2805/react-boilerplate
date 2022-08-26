import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";

const LoggedOutRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default LoggedOutRoutes;
