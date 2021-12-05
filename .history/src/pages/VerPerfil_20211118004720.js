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
            <span>
              {currentUser && (
                <i
                  className={
                    userCheck
                      ? "fas fa-check-circle checked"
                      : "far fa-check-circle"
                  }
                ></i>
              )}
            </span>
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
  }
`;

export default VerPefil;