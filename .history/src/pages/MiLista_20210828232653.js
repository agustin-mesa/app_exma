import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
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
      <List>
        {gastos.map((gasto, i) => {
          console.log(gastos);
          return <ListElement key={i}>{gasto.descripcion}</ListElement>;
        })}
      </List>
    </>
  );
};

const List = styled.div`
  background: red;
`;

const ListElement = styled.div`
  background: red;
`;

export default MiLista;
