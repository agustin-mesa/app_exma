import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetGasto from "../hooks/useGetGasto";

import Header from "../components/Header";
import BtnRegresar from "../components/BtnRegresar";

const EditarGasto = () => {
  const { id } = useParams();
  const [gasto] = useGetGasto(id);

  return (
    <>
      <Header />
      <ContainerEditarGasto>
        <BtnRegresar ruta="/gestion/mi-lista" />
      </ContainerEditarGasto>
    </>
  );
};

const ContainerEditarGasto = styled.div`
  padding: 0 20px;
`;

export default EditarGasto;
