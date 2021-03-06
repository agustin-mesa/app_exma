import React, { useState, useEffect, useContext } from "react";
import useGetGastosMes from "../hooks/useGetGastosMes";

const TotalGastadoContext = React.createContext();

const useTotalMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState(0);
  const gastos = useGetGastosMes();

  useEffect(() => {
    let acumulador = 0;
    console.log(gasto.precio);
    gastos.forEach((gasto) => {
      acumulador += gasto.precio;
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
