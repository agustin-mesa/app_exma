import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastosMes = ({ idGasto }) => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    db.collection(user.email)
      .doc(idGasto)
      .orderBy("fecha", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
      });
  }, []);

  return [gastos];
};

export default useGetGastosMes;
