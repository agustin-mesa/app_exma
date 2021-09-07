import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//---------------- HOOKS ----------------
import useGetGasto from "../hooks/useGetGasto";
//---------------- COMPONENTS ----------------
import Header from "../components/Header";
import BtnRegresar from "../components/BtnRegresar";
//---------------- PAGES ----------------
import AddGasto from "./AddGasto";

const EditarGasto = () => {
  const { id } = useParams();
  const [gasto] = useGetGasto(id);

  return (
    <>
      <Header />
      <ContainerEditarGasto>
        <BtnRegresar ruta="/gestion/mi-lista" />
        <h3>Editando...</h3>
        <AddGasto gasto={gasto} />
      </ContainerEditarGasto>
    </>
  );
};

const ContainerEditarGasto = styled.div`
  h3 {
    color: #505bda;
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    margin: 20px 0 15px;
  }
`;

export default EditarGasto;
