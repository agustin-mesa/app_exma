import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();

  gastos.reduce(() => {}, {
    Comida: 0,
    Hogar: 0,
    "Cuentas y Pagos": 0,
    Transporte: 0,
    Ropa: 0,
    "Salud e Higiene": 0,
    Compras: 0,
    Diversión: 0,
  });

  return;
};

export default useGetGastosMesCategoria;
