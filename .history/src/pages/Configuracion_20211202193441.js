import React, { useState } from "react";
import styled from "styled-components";

//---------------- STYLES ----------------
import { Input } from "../components/elements/StyledElements";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";

const Configuracion = () => {
  const { user } = useAuth();

  const [inputNuevoNombre, changeNuevoNombre] = useState("");

  const handleChange = () => {};

  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerSettings>
        <Perfil />
        <ListOptions>
          <li>
            <span>Foto de perfil</span>
            <span></span>
            <span className="btn-editar">Editar</span>
          </li>
          <li>
            <span>Nombre</span>
            <span>{user.displayName}</span>
            <span className="btn-editar">Editar</span>
          </li>
          <div>
            <Input
              type="text"
              name="nuevoNombre"
              placeholder="Nuevo nombre"
              value={inputNuevoNombre}
              onChange={handleChange}
              autoComplete="off"
            />
            <span className="btn-editar">Editar</span>
          </div>
          <li>
            <span>Email</span>
            <span>{user.email}</span>
            <span className="btn-editar">Editar</span>
          </li>
          <li>
            <span>Contraseña</span>
            <span>*********</span>
            <span className="btn-editar">Editar</span>
          </li>
        </ListOptions>
      </ContainerSettings>
    </>
  );
};
const ContainerSettings = styled.div`
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
    border-radius: 15px;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  li span {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  }
  li span:nth-child(1) {
    flex: 1;
  }
  li span:nth-child(2) {
    font-size: 12px;
    font-weight: 500;
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 15px 0 0;
    color: var(--text__05);
  }
  li span.btn-editar {
    color: var(--text__03);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  }
  li:hover {
    background: var(--bg__09);
  }

  div {
    padding: 15px 20px;
    border-bottom: 1px solid var(--border__03);
  }
  div button {
    padding: ;
  }
`;

export default Configuracion;
