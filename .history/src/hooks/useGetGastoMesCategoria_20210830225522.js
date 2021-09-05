import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();

  const sumaGastos = gastos.reduce(
    (objetoResultado, objetoActual) => {
      const categoriaActual = objetoActual.categoria;
      const valorActual = objetoActual.valor;

      objetoResultado[categoriaActual] += valorActual;

      return objetoResultado;
    },
    {
      comida: 0,
      hogar: 0,
      cuentas: 0,
      transporte: 0,
      ropa: 0,
      salud: 0,
      compras: 0,
      diversión: 0,
    }
  );

  console.log(sumaGastos);

  return;
};

export default useGetGastosMesCategoria;