import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../context/AuthContext";

const MiLista = () => {
  const context = useContext(AuthContext);

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
