import React from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import PantallaOpcionConfig from "../components/PantallaOpcionConfig";

const PantallaAccesibilidad = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Pantalla" />
      <ContainerPantAcces>
        <PantallaOpcionConfig
          titulo="Modo oscuro"
          descripcion="Ajusta el aspecto de EXMA para reducir el brillo de la pantalla y descansar la vista."
        />
      </ContainerPantAcces>
    </>
  );
};

const ContainerPantAcces = styled.div``;

export default PantallaAccesibilidad;
