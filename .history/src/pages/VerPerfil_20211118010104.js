import React from "react";
import styled from "styled-components";

//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
import PhotoPerfil from "../components/PhotoPerfil";
import UserChecked from "../components/UserChecked";
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
          <div className="perfil__photo-content">
            {auth.currentUser.photoURL ? (
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
            )}
            <div className="perfil__icon-check">
              <UserChecked
                emailChecked={auth.currentUser.emailVerified}
                fontSize="20"
              />
            </div>
          </div>
        </div>
      </ContainerVerPerfil>
    </>
  );
};

const ContainerVerPerfil = styled.div`
  .perfil {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .perfil__icon-check {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export default VerPefil;
