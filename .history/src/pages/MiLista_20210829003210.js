import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import useGetGastos from "../hooks/useGetGastos";
import formatearValor from "../functions/formatearValor";
import { Link } from "react-router-dom";

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
            console.log(gasto.id);
            return (
              <ListElement key={i}>
                <IconCategorias nombre={gasto.categoria} />
                <p>{gasto.descripcion}</p>
                <span>{formatearValor(gasto.precio)}</span>
                <ContainerButtons>
                  <Link to={`/editar/${gasto.id}`}>
                    <button>
                      <i className="fas fa-pen"></i>
                    </button>
                  </Link>
                  <Link>
                    <button>
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </Link>
                </ContainerButtons>
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
  color: #444444;
  font-size: 14px;
  text-align: left;

  p {
    font-weight: 500;
    flex: 1;
  }
  span {
    font-weight: 700;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;

  button {
    background: none;
    border: none;
    outline: none;
    color: rgba(68, 68, 68, 0.3);
    padding: 6px;
    margin: 0 1px;
    transition: all 0.2s ease;
  }
  button:hover {
    color: rgba(68, 68, 68, 0.6);
  }
`;

export default MiLista;
