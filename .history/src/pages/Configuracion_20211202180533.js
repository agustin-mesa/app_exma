import React from "react";
import styled from "styled-components";

//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";

const Configuracion = () => {
  const { user } = useAuth();

  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerSettings>
        <Perfil />
        <ListOptions>
          <li>
            <span>Foto de perfil</span>
            <span></span>
            <span>Editar</span>
          </li>
          <li>
            <span>Nombre</span>
            <span>{user.displayName}</span>
            <span>Editar</span>
          </li>
          <li>
            <span>Email</span>
            <span>{user.email}</span>
            <span>Editar</span>
          </li>
          <li>
            <span>Contraseña</span>
            <span>*********</span>
            <span>Editar</span>
          </li>
        </ListOptions>
      </ContainerSettings>
    </>
  );
};
const ContainerSettings = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
`;
const ListOptions = styled.ul`
  background: red;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
  }
  li span {
    color: #444444;
    font-size: 13px;
    font-weight: 700;
  }
  li span:nth-child(2) {
    background: yellow;
    flex: 1;
  }
`;

export default Configuracion;
