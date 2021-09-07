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

      return objetoResultado;
    },
    {
      "Comida": 0,
      "Hogar": 0,
      "Cuentas": 0,
      Transporte: 0,
      Ropa: 0,
      Salud: 0,
      `Compras`: 0,
      `Diversión`: 0,
    }
  );

  console.log(sumaGastos);

  return;
};

export default useGetGastosMesCategoria;
