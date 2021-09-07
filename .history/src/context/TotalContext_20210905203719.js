import React, { useState, useEffect, useContext } from "react";
//---------------- HOOKS ----------------
import useGetGastosMes from "../hooks/useGetGastosMes";

// Contexto/estado global
const TotalGastadoContext = React.createContext();

const useTotalMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState(0);
  const gastos = useGetGastosMes();

  useEffect(() => {
    let acumulador = 0;

    gastos.map((gasto) => {
      return (acumulador += gasto.precio);
    });
    changeTotal(acumulador);
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalMes };
