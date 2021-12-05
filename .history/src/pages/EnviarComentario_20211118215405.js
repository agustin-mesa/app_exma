import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import { Boton, showElement } from "../components/elements/StyledElements";
import addComentario from "../firebase/addComentario";

const EnviarComentario = () => {
  const [mensaje, changeMensaje] = useState("");
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

  //  ReCaptcha
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
    }
  };

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

    const regexMensaje = /^[\s\S]{5,1000}$/;
    if (!regexMensaje.test(mensaje)) {
      mostrarAlerta(
        true,
        "error",
        "El mensaje debe tener entre 5 y 1000 caracteres"
      );
      return;
    }
    // Se comprueba que estén los datos llenos
    if (mensaje === "") {
      mostrarAlerta(true, "error", "Por favor, escribe un mensaje.");
      return;
    }
    if (captcha.current.getValue()) {
      captcha.current.reset();
    } else {
      mostrarAlerta(true, "error", "Por favor, acepte el captcha.");
      return;
    }

    addComentario({
      emailUser: auth.currentUser.email,
      displayNameUser: auth.currentUser.displayName,
      mensaje: mensaje,
    })
      .then(() => {
        changeMensaje("");
        mostrarAlerta(
          true,
          "exito",
          "¡Enviado correctamente! Gracias por tu comentario :)"
        );
      })
      .catch((error) => {
        mostrarAlerta(
          true,
          "error",
          "Hubo un problema al intentar enviar el comentario."
        );
      });
  };

  return (
    <>
      <Helmet>
        <title>Enviar comentario</title>
      </Helmet>
      {auth.currentUser !== null ? (
        <>
          <BtnRegresar
            className="margin"
            ruta="/gestion"
            titulo="Queremos leerte"
          />
          <ContainerEnviarComentario>
            <form action="">
              <p>
                Tus comentarios nos sirve para mejorar la aplicación y darte el
                mejor servicio para que puedas administrar tus gastos de manera
                favorable.
              </p>
              <div>
                <span>{mensaje.length}/1000</span>
                <textarea
                  value={mensaje}
                  placeholder="Su mensaje..."
                  name="mensaje"
                  onChange={handleChange}
                  maxLength="1000"
                ></textarea>
              </div>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LcLPBsdAAAAAORBh-G8etHEMrJFw2PR3RYM4w5H"
                onChange={onChange}
                className="recaptcha"
              />
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
    color: var(--text__01);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    padding: 0 20px;
    width: 100%;
    animation: opac 0.5s ease forwards;
    margin: 0 0 5px;
    text-align: center;
  }
  p.info-adicional {
    font-size: 10px;
    line-height: 16px;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  form .recaptcha div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 0;
  }
  @keyframes opac {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  div {
    position: relative;
    display: flex;
    width: 100%;
    span {
      position: absolute;
      bottom: -10px;
      right: 0;
      padding: 2px 10px;
      font-size: 12px;
      color: var(--text__01);
    }
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 200px;
    min-height: 120px;
    margin: 10px 0;
    padding: 20px;
    color: var(--text__01);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 30px;
    border: none;
    background: color: var(--bg__02);
  }
  textarea:focus {
    border: none;
    outline: none;
  }
`;

export default EnviarComentario;
