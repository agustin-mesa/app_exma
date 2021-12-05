import React from "react";
import styled from "styled-components";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
import PhotoPerfil from "../components/PhotoPerfil";
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
          {auth.currentUser ? (
            auth.currentUser.photoURL ? (
              <PhotoPerfil
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.displayName}
                className="perfil__photo"
              />
            ) : (
              <PhotoPerfil
                src=""
                icono="far fa-user"
                className="perfil__photo"
              />
            )
          ) : (
            ""
          )}
          <span></span>
        </div>
      </ContainerVerPerfil>
    </>
  );
};

const ContainerVerPerfil = styled.div`
  .perfil {
    display: flex;
    justify-content: center;
  }
`;

export default VerPefil;