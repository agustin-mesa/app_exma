import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";

import IconCategorias from "../components/IconCategorias";

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
        {gastos.map((gastos) => {
          return gastos.map((gasto, i) => {
            return (
              <ListElement key={i}>
                <IconCategorias nombre={gasto.categoria} />
                <p>{gasto.descripcion}</p>
                <span>${gasto.precio}</span>
              </ListElement>
            );
          });
        })}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const ListElement = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  background: yellow;
  color: #444444;
  font-size: 14px;
  text-align: left;

  p {
    font-weight: 500;
    flex: 1;
    background: red;
  }
  span {
    font-weight: 700;
  }
`;

export default MiLista;
