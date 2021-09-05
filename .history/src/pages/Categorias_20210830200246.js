import React from "react";
import { Helmet } from "react-helmet";
import useGetGastosMes from "../hooks/useGetGastosMes";

const Categorias = () => {
  useGetGastosMes();
  return (
    <div>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Categorías</title>
      </Helmet>
      <h5>Categorias</h5>
    </div>
  );
};

export default Categorias;
