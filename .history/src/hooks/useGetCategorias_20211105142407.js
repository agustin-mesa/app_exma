import { useState, useEffect } from "react";
import { db, storage, storageRef } from "../firebase/firebase";

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
    console.log(
      storageRef.child(
        `imagesCategorias/icon_${categorias[4].toLowerCase()}.png`
      )
    );
  }, []);

  return [categorias];
};

export default useGetCategorias;
