import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();

  const sumaGastos = gastos.reduce(
    (objetoResultado, objetoActual) => {
      const categoriaActual = objetoActual.categoria;
      const valorActual = objetoActual.precio;

      objetoResultado[categoriaActual] += valorActual;
    },
    {
      "comida": 0,
      Hogar: 0,
      "Cuentas y Pagos": 0,
      Transporte: 0,
      Ropa: 0,
      "Salud e Higiene": 0,
      Compras: 0,
      Diversión: 0,
    }
  );

  console.log(sumaGastos);

  return;
};

export default useGetGastosMesCategoria;
