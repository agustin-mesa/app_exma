import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import PhotoPerfil from "../components/PhotoPerfil";
import UserChecked from "../components/UserChecked";

const Perfil = () => {
  return (
    <>
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
    </>
  );
};

export default Perfil;
