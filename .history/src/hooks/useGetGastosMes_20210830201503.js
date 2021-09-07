import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { startOfMonth, endOfMonth } from "date-fns";

const useGetGastosMes = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    const inicioMes = startOfMonth();
    db.collection(user.email)
      .orderBy("fecha", "desc")
      .where("fecha", ">=", inicioMes)
      .where("fecha", "<=", finMes)
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((document) => {
          console.log(document.data());
        });
      });
  }, []);

  return [gastos];
};

export default useGetGastosMes;
