import React from "react";
import { Route, Redirect } from "react-router-dom";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";

const RutaProtegida = ({ children, ...restoProps }) => {
  // Obtengo el estado global del user para saber si existe usuario o no.
  const { user } = useAuth();

  // Si existe usuario, entonces tiene acceso a la ruta "/gestion",
  // por lo que ésta ruta tendrá sus propiedades y sus components hijos.
  // De lo contrario, se lo redirecciona al "/login"
  if (user) {
    return <Route {...restoProps}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default RutaProtegida;
