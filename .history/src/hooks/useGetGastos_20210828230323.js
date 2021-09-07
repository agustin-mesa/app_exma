import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastos = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  /*.doc(user.email)
      .where(user.email, "==", user.email)
      .collection("gastos")
      .orderBy("fecha", "desc")
      .limit(10)*/
  useEffect(() => {
    db.collection(user.email).onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      /*changeGastos(
        snapshot.docs.map((gasto) => {
          console.log(gasto.data());
          return { ...gasto.data(), id: gasto.id };
        })
      );*/
    });
  }, []);

  return [gastos];
};

export default useGetGastos;
