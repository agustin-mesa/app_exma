import { useState, useEffect } from "react";
import { storage, storageRef } from "../firebase/firebase";

const useGetCategorias = () => {
  const [categorias, changeCategorias] = useState([
    { id: "Comida" },
    { id: "Hogar" },
    { id: "Cuentas y Pagos" },
    { id: "Transporte" },
    { id: "Ropa" },
    { id: "Salud e Higiene" },
    { id: "Compras" },
    { id: "Diversión" },
  ]);

  const cargarCategorias = () => {
    console.log(
      storageRef.child(
        `imagesCategorias/icon_${categorias[4].id.toLowerCase}.png`
      )
    );
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  return [categorias];
};

export default useGetCategorias;
