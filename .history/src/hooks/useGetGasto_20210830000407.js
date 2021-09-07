import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "./useGetGastos";

const useGetGasto = (id) => {
  const { user } = useAuth();
  const [gasto, changeGasto] = useState("");

  useEffect(() => {
    db.collection(user.email)
      .doc(id)
      .get()
      .then((doc) => {});
  }, []);

  return [gasto];
};

export default useGetGasto;
