import React from "react";
import styled from "styled-components";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import { Boton, showElement } from "../components/elements/StyledElements";

const VerPefil = () => {
  return (
    <ContainerVerPerfil>
      <BtnRegresar className="margin" titulo="Mi perfil" />
    </ContainerVerPerfil>
  );
};

const ContainerVerPerfil = styled.div``;

export default VerPefil;
