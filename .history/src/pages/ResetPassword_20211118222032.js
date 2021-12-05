import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { NavLink, Redirect } from "react-router-dom";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import {
  showElement,
  Input,
  LogoIcon,
  HeaderAuth,
  Boton,
} from "../components/elements/StyledElements";

const ResetPassword = () => {
  const [correo, changeCorreo] = useState("");
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
    changeCorreo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeAlertState(false);
    changeAlert({});

    // Se comprueba que el correo ingresado sea válido
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      mostrarAlerta(
        true,
        "error",
        "Por favor, ingrese un correo electrónico válido."
      );

      return;
    }
    // Se comprueba que estén los datos llenos
    if (correo === "") {
      mostrarAlerta(
        true,
        "error",
        "Por favor, introduzca su correo electrónico."
      );

      return;
    }

    // Enviar link de reseteo de password
    try {
      await auth.sendPasswordResetEmail(correo);
      mostrarAlerta(
        true,
        "exito",
        "Link enviado correctamente, verifica tu correo."
      );
    } catch (error) {
      let msg;
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          msg = "El correo ingresado no se encuentra registrado.";
          break;
        default:
          msg = "Hubo un error al intentar enviar el link.";
          break;
      }
      mostrarAlerta(true, "error", msg);
    }
  };

  return (
    <>
      <Helmet>
        <title>Olvidé mi contraseña</title>
      </Helmet>
      {auth.currentUser === null ? (
        <>
          <ContainerResetPassword>
            <HeaderAuth>
              <NavLink to="/" exact>
                <LogoIcon
                  className="grande"
                  src={logo}
                  alt="LOGO EXMA"
                ></LogoIcon>
              </NavLink>
            </HeaderAuth>
            <BtnRegresar ruta="/login" titulo="Olvidé mi contraseña" />
            <form action="">
              <p className="center">
                Escribe el <b>correo electrónico</b> a recuperar y te enviaremos
                un link para que crear una <b>nueva clave</b>.
              </p>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={handleChange}
              />
              <Boton type="submit" onClick={handleSubmit}>
                Enviar link
              </Boton>
            </form>
            <MsgAlert
              classAlert={alert.classAlert}
              msg={alert.msg}
              alertState={alertState}
              changeAlertState={changeAlertState}
            />
          </ContainerResetPassword>
        </>
      ) : (
        <Redirect to="/gestion" />
      )}
    </>
  );
};

const ContainerResetPassword = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
width: 100%;
height: 80vh;
  animation: ${showElement} 1s ease forwards;

  p {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin: 0 0 5px;
    text-align: center;
    padding: 0 20px;
    width: 100%;
    animation: opac 0.5s ease forwards;
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

`;

export default ResetPassword;
