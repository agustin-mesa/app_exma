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
      <div>
        <BtnRegresar ruta="/gestion/mi-lista" />
        <AddGasto gasto={gasto} />
      </div>
    </>
  );
};

export default EditarGasto;
