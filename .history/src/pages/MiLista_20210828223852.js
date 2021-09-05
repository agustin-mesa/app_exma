import React from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";

const MiLista = () => {
  const { user } = useAuth();
  const gastos = useGetGastos();

  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Mi lista</title>
      </Helmet>
      <div>
        <h5>LISTA ...</h5>
      </div>
    </>
  );
};

export default MiLista;
