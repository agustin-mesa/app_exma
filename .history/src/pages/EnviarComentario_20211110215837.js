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
import { Boton, showElement } from "../components/elements/StyledElements";

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
          <ContainerBtnRegresar>
            <BtnRegresar ruta="/gestion" />
          </ContainerBtnRegresar>
          <ContainerEnviarComentario>
            <form action="">
              <h3>Queremos leerte</h3>
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
            <MsgAlert
              classAlert={alert.classAlert}
              msg={alert.msg}
              alertState={alertState}
              changeAlertState={changeAlertState}
            />
          </ContainerEnviarComentario>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const ContainerBtnRegresar = styled.div`
  margin: 50px 0 0;
`;
const ContainerEnviarComentario = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
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

    h3 {
      color: #505bda;
      font-size: 1.5em;
      font-weight: 700;
      text-align: center;
      margin: 20px 0 15px;
    }

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
    color: #444444;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 30px;
    border: solid 1px rgba(68, 68, 68, 0.4);
  }
`;

export default EnviarComentario;
