import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

const useGetGastos = () => {
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      console.log(snapshot.docs);
    });
  }, []);

  return [gastos];
};

export default useGetGastos;
