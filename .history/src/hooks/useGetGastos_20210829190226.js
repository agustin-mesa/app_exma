import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const useGetGastos = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);
  const [ultimoGasto, changeUltimoGasto] = useState(null);
  const [gastosPorCargar, changeGastosPorCargar] = useState(false);

  const cargarMasGastos = () => {
    db.collection(user.email)
      .orderBy("fecha", "desc")
      .limit(10)
      .startAfter(ultimoGasto)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          changeUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

          changeGastos(
            gastos.concat(
              snapshot.docs.map((gasto) => {
                return { ...gasto.data(), id: gasto.id };
              })
            )
          );
        }
      });
  };

  useEffect(() => {
    const unsuscribe = db
      .collection(user.email)
      .orderBy("fecha", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          changeUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
          changeGastosPorCargar(true);
        } else {
          changeGastosPorCargar(false);
        }

        changeGastos(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          })
        );
      });

    return unsuscribe;
  }, [user]);

  return gastos, cargarMasGastos, gastosPorCargar;
};

export default useGetGastos;
