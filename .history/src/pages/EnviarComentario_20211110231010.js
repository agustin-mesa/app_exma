import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import { Boton, showElement, H3 } from "../components/elements/StyledElements";

const EnviarComentario = () => {
  const [mensaje, changeMensaje] = useState("");
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
    changeMensaje(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeAlertState(false);
    changeAlert({});

    // Se comprueba que estén los datos llenos
    if (mensaje === "") {
      mostrarAlerta(true, "error", "Por favor, escribe un mensaje.");
      return;
    }

    // Enviar link de reseteo de password
    try {
    } catch (error) {}
  };

  return (
    <>
      <Helmet>
        <title>Enviar comentario</title>
      </Helmet>
      {auth.currentUser !== null ? (
        <>
          <BtnRegresar className="margin" ruta="/gestion" />
          <ContainerEnviarComentario>
            <form action="">
              <H3>Queremos leerte</H3>
              <p>
                Tus comentarios nos sirve para mejorar la aplicación y darte el
                mejor servicio para que puedas administrar tus gastos de manera
                favorable.
              </p>
              <textarea
                placeholder="Su mensaje..."
                name="mensaje"
                onChange={handleChange}
              ></textarea>
              <Boton type="submit" onClick={handleSubmit}>
                Enviar
              </Boton>
            </form>
          </ContainerEnviarComentario>
          <MsgAlert
            classAlert={alert.classAlert}
            msg={alert.msg}
            alertState={alertState}
            changeAlertState={changeAlertState}
          />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const ContainerEnviarComentario = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  animation: ${showElement} 1s ease forwards;

  p {
    color: #444444;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    padding: 0 20px;
    width: 100%;
    animation: opac 0.5s ease forwards;
    margin: 0 0 5px;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @keyframes opac {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  div {
    width: 100%;
    display: flex;
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 120px;
    margin: 10px 0;
    padding: 20px;
    color: #444444;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 30px;
    border: none;
    background: rgba(68, 68, 68, 0.1);
  }
  textarea:focus {
    border: none;
    outline: none;
  }
`;

export default EnviarComentario;
