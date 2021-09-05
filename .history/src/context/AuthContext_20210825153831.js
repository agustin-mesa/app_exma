import React, { useState, useContext, useEffect } from "react";
import { auth } from "./../firebase/firebase";

// Contexto/estado global
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, changeUser] = useState();

  // Para saber cuando termina de cargar la comprobación
  // del onAuthStateChanged
  const [loading, changeLoading] = useState(true);

  // Efecto para ejecutar la comprobación una sola vez.
  useEffect(() => {
    // Comprobación si hay un user
    const cancelarSuscripcion = auth.onAuthStateChanged((user) => {
      changeUser(user);
      changeLoading(false);
    });

    return cancelarSuscripcion;
  });

  return (
    <AuthContext.Provider value={{ user: user }}>
      {/*
            Se retorna los elementos hijos cuando no esté cargando.
            Durante la carga se comprueba si hay usuario o no.
        */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
