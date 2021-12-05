import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
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
  const { user } = useAuth();

  return (
    <>
      <BtnRegresar className="margin" titulo="Mi perfil" />
      <ContainerVerPerfil>
        <div className="perfil">
          <div className="perfil__photo-content">
            <div className="photo-content">
              {user.photoURL ? (
                <PhotoPerfil
                  src={user.photoURL}
                  alt={user.displayName}
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
                <UserChecked emailChecked={user.emailVerified} fontSize="18" />
              </div>
            </div>
          </div>
          <div className="perfil__datos">
            <span>{user.displayName}</span>
            <p>{user.email}</p>
          </div>
          <div className="prox-actualizacion">
            <h3>Próxima actualización</h3>
            <p>Seguimos en construcción...</p>
            <div className="wireframe-content-1">
              <div></div>
              <div></div>
            </div>
            <div className="wireframe-content-2">
              <div></div>
              <div></div>
            </div>
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
    user-select: none;
  }

  /******** FOTO ********/

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

  /******** DATOS ********/

  .perfil__datos {
    margin: 10px 0;
    text-align: center;
  }
  .perfil__datos span {
    width: 100%;
    color: #444444;
    font-size: 16px;
    font-weight: 700;
  }
  .perfil__datos p {
    color: rgba(68, 68, 68, 0.6);
    font-size: 13px;
    font-weight: 500;
  }

  /******** ACTUALIZACIÓN ********/

  .prox-actualizacion {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px 0 0;
    h3 {
      color: #505bda;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }
    p {
      color: #505bda;
      font-size: 13px;
      font-weight: 500;
    }
  }
  .wireframe-content-1 {
    display: flex;
    width: 100%;
    margin: 20px 0;
    div {
      width: 40px;
      background: rgba(220, 220, 220, 0.3);
      height: 40px;
      border-radius: 50px;
    }
    div:last-child {
      margin: 0 0 0 10px;
      flex: 1;
    }
  }
  .wireframe-content-2 {
    display: flex;
    width: 100%;
    margin: 20px 0;
    div {
      width: 40px;
      background: rgba(220, 220, 220, 0.3);
      height: 40px;
      border-radius: 50px;
    }
    div:last-child {
      height: 120px;
      margin: 0 0 0 10px;

      border-radius: 30px;
      flex: 1;
    }
  }
`;

export default VerPefil;
