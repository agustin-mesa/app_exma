import { useEffect, useState } from "react";
import useGetGastosMes from "./useGetGastosMes";

const useGetGastosMesCategoria = () => {
  const [gastosCategoria, changeGastosCategoria] = useState([]);
  const gastos = useGetGastosMes();

  useEffect(() => {
    // Retorna un objeto (ObjetoResultado) de la suma de cada categoría.
    const sumaGastos = gastos.reduce(
      (objetoResultado, objetoActual) => {
        const categoriaActual = objetoActual.categoria;
        const valorActual = objetoActual.precio;

        // Acumulo el valor de los gastos con su respectiva categoría.
        objetoResultado[categoriaActual] += valorActual;

        return objetoResultado;
      },
      {
        Comida: 0,
        Hogar: 0,
        "Cuentas y Pagos": 0,
        Venta: 0,
        Transporte: 0,
        Ropa: 0,
        "Salud e Higiene": 0,
        Compras: 0,
        Diversión: 0,
        Tecnología: 0,
        Mascota: 0,
        Otros: 0,
      }
    );
    changeGastosCategoria(
      Object.keys(sumaGastos).map((element) => {
        return { categoria: element, total: sumaGastos[element] };
      })
    );
    return sumaGastos;
  }, [gastos, changeGastosCategoria]);

  return gastosCategoria;
};

export default useGetGastosMesCategoria;
