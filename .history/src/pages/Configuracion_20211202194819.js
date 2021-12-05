import React, { useState } from "react";
import styled from "styled-components";

//---------------- STYLES ----------------
import { Input } from "../components/elements/StyledElements";
//---------------- CONTEXT ----------------
import { useAuth } from "../context/AuthContext";
//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import Perfil from "../components/Perfil";
import MsgAlert from "../components/MsgAlert";

const Configuracion = () => {
  const { user } = useAuth();

  const [showInput, changeShowInput] = useState("");

  const [inputNuevoNombre, changeNuevoNombre] = useState("");

  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  const mostrarAlerta = (boolean, classAlert, msg) => {
    changeAlertState(boolean);
    changeAlert({
      classAlert: classAlert,
      msg: msg,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "nuevoNombre") {
      // Máximo de caracteres para el nombre del gasto: -> 30 <-
      if (inputNuevoNombre.length < 20) {
        changeNuevoNombre(e.target.value);
      } else {
        changeNuevoNombre(e.target.value.slice(0, 20));
        mostrarAlerta(true, "error", "Máximo caracteres alcanzado (20/20)");
      }
    } /*else if (e.target.name === "valor") {
      // Anulo las letras para el input para poner el valor del gasto.
      // Se acepta solamente . , y números
      changeInputValor(e.target.value.replace(/[^0-9.]/g, ""));
    }*/
  };
  const handleInputChange = (e) => {
    let inputAEditar = e.target.name;
    if (inputAEditar === "btnEditarNombre") {
      changeShowInput(inputAEditar);
    }
  };

  return (
    <>
      <BtnRegresar className="margin" titulo="Configuración" />
      <ContainerSettings>
        <Perfil />
        <ListOptions>
          <li>
            <span>Foto de perfil</span>
            <span></span>
            <button className="btn-editar">Editar</button>
          </li>
          <li>
            <span>Nombre</span>
            <span>{user.displayName}</span>
            {showInput !== "btnEditarNombre" && (
              <button
                className="btn-editar"
                name="btnEditarNombre"
                onClick={(e) => handleInputChange(e)}
              >
                Editar
              </button>
            )}
          </li>
          {showInput === "btnEditarNombre" && (
            <div>
              <Input
                type="text"
                name="nuevoNombre"
                placeholder="Nuevo nombre"
                value={inputNuevoNombre}
                onChange={handleChange}
                autoComplete="off"
              />
              <button className="btn-editar">Editar</button>
            </div>
          )}

          <li>
            <span>Email</span>
            <span>{user.email}</span>
            <button className="btn-editar">Editar</button>
          </li>
          <li>
            <span>Contraseña</span>
            <span>*********</span>
            <button className="btn-editar">Editar</button>
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
  li:hover {
    background: var(--bg__09);
  }
  button.btn-editar {
    color: var(--text__03);
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  div {
    padding: 0 20px 15px;
    border-bottom: 1px solid var(--border__03);
  }
`;

export default Configuracion;
