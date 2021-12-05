import React from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";

const Configuracion = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Mi perfil" />
      <ContainerSettings></ContainerSettings>
    </>
  );
};
const ContainerSettings = styled.div``;

export default Configuracion;
