import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";

const useGetGastosMes = () => {
  const { user } = useAuth();
  const [gastos, changeGastos] = useState([]);

  useEffect(() => {
    /*
    getUnixTime -> Obtiene una fecha y lo retorna a milisegundos.
    Por lo tanto, para tener el control de los gastos del MES, 
    se necesita la PRIMERA FECHA y la ÚLTIMA FECHA del mes, entonces
    tenemos un período de tiempo en el que se acumulan los gastos.
    */
    const inicioMes = getUnixTime(startOfMonth(new Date()));
    const finMes = getUnixTime(endOfMonth(new Date()));

    if (user) {
      const unsuscribe = db
        .collection(user.email)
        .orderBy("fecha", "desc")
        .where("fecha", ">=", inicioMes)
        .where("fecha", "<=", finMes)
        .onSnapshot((snapshot) => {
          changeGastos(
            snapshot.docs.map((document) => {
              return { ...document.data(), id: document.id };
            })
          );
        });
      return unsuscribe;
    }
  }, [user]);

  return gastos;
};

export default useGetGastosMes;
