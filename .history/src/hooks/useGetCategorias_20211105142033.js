import { useState, useEffect } from "react";
import { db, storage, storageRef } from "../firebase/firebase";

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

  const getCategorias = () => {
    db.collection("imagesCategorias")
      .doc("categorias")
      .onSnapshot((snapshot) => {
        changeCategorias(snapshot.data());
      });

    console.log(
      storageRef.child(
        `imagesCategorias/icon_${categorias[4].id.toLowerCase()}.png`
      )
    );
  };
  console.log(categorias);
  useEffect(() => {
    getCategorias();
  }, []);

  return [categorias];
};

export default useGetCategorias;
