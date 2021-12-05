import React from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";

const PantallaAccesibilidad = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerPantAcces></ContainerPantAcces>
    </>
  );
};

const ContainerPantAcces = styled.div``;

export default PantallaAccesibilidad;