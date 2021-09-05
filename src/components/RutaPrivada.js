import React from "react";
import { useAuth } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const RutaProtegida = ({ children, ...restoProps }) => {
  const { user } = useAuth();

  if (user) {
    return <Route {...restoProps}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default RutaProtegida;
