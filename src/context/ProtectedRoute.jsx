import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "./StoreContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(StoreContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
