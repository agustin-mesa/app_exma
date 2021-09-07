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

  // Efecto para ejecutar la comprobación una sola vez.
  useEffect(() => {
    // Comprobación si hay un user
    auth.onAuthStateChanged();
  });

  return (
    <AuthContext.Provider value={{ user: true }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
