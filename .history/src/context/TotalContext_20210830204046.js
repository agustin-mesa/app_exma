import React, { useState, useEffect, useContext } from "react";
import useGetGastosMes from "../hooks/useGetGastosMes";

const TotalGastadoContext = React.createContext();

const useTotalMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState();
  const gastos = useGetGastosMes();
  useEffect(() => {
    let acumulador = 0;
    gastos.forEach((gasto) => {
      acumulador += gasto.precio;
      changeTotal(acumulador);
    });
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalMes };
