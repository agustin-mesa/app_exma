import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastosMes = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    db.collection(user.email)
      .docs()
      .orderBy("fecha", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
      });
  }, []);

  return [gastos];
};

export default useGetGastosMes;
