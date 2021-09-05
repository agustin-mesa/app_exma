import React, { useState, useEffect, useContext } from "react";
import useGetGastosMes from "../hooks/useGetGastosMes";

const TotalGastadoContext = React.createContext();

const useTotalMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState(7);
  const gastos = useGetGastosMes();
  useEffect(() => {
    changeTotal(gastos);
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalMes };
