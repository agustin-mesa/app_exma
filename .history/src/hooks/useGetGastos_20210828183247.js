import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastos = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    db.collection("users")
      .where(user.email)
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
      });
  }, []);

  return [gastos];
};

export default useGetGastos;
