import React from "react";
import styled from "styled-components";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import {
  Boton,
  showElement,
  Photo,
} from "../components/elements/StyledElements";

const VerPefil = () => {
  return (
    <>
      <BtnRegresar className="margin" titulo="Mi perfil" />
      <ContainerVerPerfil>
        <div className="perfil">
          <Photo>
            {auth.currentUser ? (
              auth.currentUser.photoURL ? (
                <img
                  src={auth.currentUser.photoURL}
                  alt={auth.currentUser.displayName}
                />
              ) : (
                <i className="far fa-user"></i>
              )
            ) : (
              ""
            )}
          </Photo>
        </div>
      </ContainerVerPerfil>
    </>
  );
};

const ContainerVerPerfil = styled.div``;

export default VerPefil;
