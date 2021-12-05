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
            <div className="photo-content">
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
                  fontSize="18"
                />
              </div>
            </div>
          </div>
          <div className="perfil__datos">
            <span>{auth.currentUser.displayName}</span>
          </div>
        </div>
      </ContainerVerPerfil>
    </>
  );
};

const ContainerVerPerfil = styled.div`
  .perfil {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .perfil__photo-content {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .photo-content {
    display: inline-block;
    position: relative;
  }
  .perfil__icon-check {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 50px;
    width: 23px;
    height: 23px;
    padding: 3px;
    bottom: 2px;
    right: 0px;
  }
  .perfil__datos {
    margin: 10px 0;
    text-align: center;
  }
  .perfil__datos span {
    width: 100%;
    color: #444444;
    font-size: 14px;
    font-weight: 700;
  }
`;

export default VerPefil;
