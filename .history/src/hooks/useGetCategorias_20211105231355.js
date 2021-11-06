import { useState, useEffect } from "react";
//---------------- FIREBASE ----------------
import { db, storageRef } from "../firebase/firebase";

const useGetCategorias = (id) => {
  const [categorias, changeCategorias] = useState([]);

  const getCategorias = () => {
    db.collection("imagesCategorias").onSnapshot((snapshot) => {
      return changeCategorias(snapshot.data().ids);
    });
  };

  useEffect(() => {
    getCategorias();
  }, []);
  return [categorias];
};

export default useGetCategorias;
