import { useState, useEffect } from "react";
//---------------- FIREBASE ----------------
import { db, storageRef } from "../firebase/firebase";

const useGetGasto = (id) => {
  const [categorias, changeCategorias] = useState([]);

  const getCategorias = () => {
    db.collection("imagesCategorias").onSnapshot((snapshot) => {
      return changeCategorias(snapshot.data().ids);
    });
  };

  useEffect(() => {}, []);
  return [categorias];
};

export default useGetGasto;
