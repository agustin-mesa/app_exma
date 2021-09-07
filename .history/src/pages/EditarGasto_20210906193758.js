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
        <AddGasto gasto={gasto} />
      </ContainerEditarGasto>
    </>
  );
};

const ContainerEditarGasto = styled.div`
  h3 {
    text-align: center;
    color: #505bda;
    font-size: 16px;
    font-weight: 700;
  }
`;

export default EditarGasto;
