import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastos = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    db.collection("users")
      .doc(user.email)
      .collection("gastos")
      .onSnapshot((snapshot) => {
        console.log(snapshot.doc[0]);
      });
  }, []);

  return [gastos];
};

export default useGetGastos;
