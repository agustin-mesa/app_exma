import React, { useState, useContext, useEffect } from "react";

// Contexto/estado global
const ThemeContext = React.createContext();

// Hook para acceder al contexto
const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  // Obtenemos el estado del modo oscuro en el localstorage
  const themeLS = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : [];

  const [modoOscuro, changeModoOscuro] = useState(themeLS);
  // Loading al cambiar el theme
  const [loading, changeLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      changeModoOscuro(true);
    } else {
      changeModoOscuro(false);
    }
    changeLoading(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: modoOscuro }}>
      {/*
            Se retorna los elementos hijos cuando no esté cargando.
            Durante la carga se comprueba si hay usuario o no.
        */}
      {!loading && children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, useTheme };
