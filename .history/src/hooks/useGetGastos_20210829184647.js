import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastos = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  const cargarMasGastos = () => {
    db.collection(user.email)
      .where(user.email, "==", user.email)
      .orderBy("fecha", "desc")
      .limit(10);
  };

  useEffect(() => {
    const unsuscribe = db
      .collection(user.email)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        changeGastos(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          })
        );
      });

    return unsuscribe;
  }, [user]);

  return gastos;
};

export default useGetGastos;
