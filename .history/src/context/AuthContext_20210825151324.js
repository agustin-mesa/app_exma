import React from "react";

// Contexto/estado global
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: true }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
