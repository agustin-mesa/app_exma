import React, { useContext } from "react";

// Contexto/estado global
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: true }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
