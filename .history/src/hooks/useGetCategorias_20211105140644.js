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
    db.collection("imagesCategorias").onSnapshot((snapshot) => {
      changeCategorias(() => {
        snapshot.docs.map((document) => {
          return { ...document.data() };
        });
      });
    });
    console.log(categorias);

    console.log(
      storageRef.child(
        `imagesCategorias/icon_${categorias[4].id.toLowerCase()}.png`
      )
    );
  };

  useEffect(() => {
    getCategorias();
  }, []);

  return [categorias];
};

export default useGetCategorias;
