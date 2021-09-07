import { useState } from "react";

const useGetGastosMes = () => {
  const [gastos, changeGastos] = useState([]);

  return [gastos];
};

export default useGetGastosMes;
