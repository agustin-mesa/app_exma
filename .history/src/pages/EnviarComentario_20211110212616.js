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
import { ContainerInicio, Boton } from "../components/elements/StyledElements";

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
      {auth.currentUser === null ? (
        <ContainerInicio>
          <ContainerBtnRegresar>
            <BtnRegresar ruta="/gestion" />
          </ContainerBtnRegresar>
          <form action="">
            <h3>Olvidé mi contraseña</h3>
            <textarea name="mensaje" onChange={handleChange}></textarea>
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
        </ContainerInicio>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

const ContainerBtnRegresar = styled.div`
  width: 100%;
  display: flex;
`;

export default EnviarComentario;
