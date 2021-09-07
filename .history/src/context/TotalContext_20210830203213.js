import React, { useState, useEffect, useContext } from "react";

const TotalGastadoContext = React.createContext();

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState(7);

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider };
