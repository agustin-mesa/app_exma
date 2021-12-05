import React from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";

const Configuracion = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerSettings>
        <Perfil />
      </ContainerSettings>
    </>
  );
};
const ContainerSettings = styled.div``;

export default Configuracion;
