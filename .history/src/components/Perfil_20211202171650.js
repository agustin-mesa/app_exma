import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import PhotoPerfil from "./components/PhotoPerfil";
import UserChecked from "./components/UserChecked";

const Perfil = () => {
  const { user } = useAuth();

  return (
    <ContainerPerfil>
      <div className="perfil__photo-content">
        <div className="photo-content">
          {user.photoURL ? (
            <PhotoPerfil
              src={user.photoURL}
              alt={user.displayName}
              className="perfil__photo"
            />
          ) : (
            <PhotoPerfil src="" icono="far fa-user" className="perfil__photo" />
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
    </ContainerPerfil>
  );
};

const ContainerPerfil = styled.div`
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
    background: var(--bg__01);
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
    color: var(--text__01);
    font-size: 16px;
    font-weight: 700;
  }
  .perfil__datos p {
    color: var(--text__05);
    font-size: 13px;
    font-weight: 500;
  }
`;

export default Perfil;
