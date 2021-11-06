import { useState, useEffect } from "react";
import { db, storageRef } from "../firebase/firebase";

const useGetCategorias = () => {
  const [categorias, changeCategorias] = useState([]);

  const getCategorias = () => {
    db.collection("imagesCategorias")
      .doc("categorias")
      .onSnapshot((snapshot) => {
        changeCategorias(snapshot.data().ids);
      });
  };

  console.log("--- ", categorias);

  useEffect(() => {
    getCategorias();
    categorias.map((categoria) => {
      storageRef.child(`imagesCategorias/icon_${categoria.toLowerCase()}.png`);
    });
  }, []);

  return [categorias];
};

export default useGetCategorias;
