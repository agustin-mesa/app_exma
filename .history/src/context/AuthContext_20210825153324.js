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
    auth.onAuthStateChanged((user) => {
      changeUser(user);
    });
  });

  return (
    <AuthContext.Provider value={{ user: user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
