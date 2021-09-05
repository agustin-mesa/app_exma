import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();
  console.log(gastos);
  return;
};

export default useGetGastosMesCategoria;
