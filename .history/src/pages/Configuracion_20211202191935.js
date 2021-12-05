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
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
  }
  li span {
    color: #444444;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  }
  li span:nth-child(1) {
    flex: 1;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  li span:nth-child(2) {
    font-size: 12px;
    font-weight: 500;
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 15px 0 0;
  }
`;

export default Configuracion;
