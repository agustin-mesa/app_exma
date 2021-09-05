import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();

  useEffect(() => {
    const sumaGastos = gastos.reduce(
      (objetoResultado, objetoActual) => {
        const categoriaActual = objetoActual.categoria;
        const valorActual = objetoActual.precio;

        objetoResultado[categoriaActual] += valorActual;

        return objetoResultado;
      },
      {
        Comida: 0,
        Hogar: 0,
        "Cuentas y Pagos": 0,
        Transporte: 0,
        Ropa: 0,
        "Salud e Higiene": 0,
        Compras: 0,
        Diversión: 0,
      }
    );
    changeGastosCategoria(
      Object.keys(sumaGastos).map((element) => {
        return { categoria: element, total: sumaGastos[element] };
      })
    );
    return sumaGastos;
  }, [, gastos]);

  return gastosCategoria;
};

export default useGetGastosMesCategoria;
