import { useState } from "react";
import { db } from "../firebase/firebase";

const useGetGastosMes = () => {
  const [gastos, changeGastos] = useState([]);

  return [gastos];
};

export default useGetGastosMes;
