import { useState, useEffect } from "react";
import { storage, storageRef } from "../firebase/firebase";

const useGetCategorias = () => {
  const { user } = useAuth();
  const [categorias, changeCategorias] = useState([]);

  const cargarCategorias = () => {
    console.log(storageRef.child("imagesCategorias/icon_ropa.png"));
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  return [categorias];
};

export default useGetCategorias;
