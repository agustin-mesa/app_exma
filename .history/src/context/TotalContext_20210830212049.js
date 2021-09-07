import React, { useState, useEffect, useContext } from "react";
import useGetGastosMes from "../hooks/useGetGastosMes";

const TotalGastadoContext = React.createContext();

const useTotalMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, changeTotal] = useState(0);
  const gastos = useGetGastosMes();
  console.log(gastos);

  useEffect(() => {
    let acumulador = 0;
    gastos.map((gasto) => {
      acumulador += gasto.precio;
    });
    changeTotal("ACUMULADOR: ", acumulador);
  }, [gastos]);

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export { TotalGastadoProvider, useTotalMes };
