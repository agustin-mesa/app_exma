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
          <BtnRegresar ruta="/login" />
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
            <form action="">
              <h3>Olvidé mi contraseña</h3>
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
    text-align: left;
    padding: 0 20px;
    width: 100%;
    animation: opac 0.5s ease forwards;
  }
  p.center {
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

    .auth__face-google {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        font-size: 30px;
        margin: 5px 10px;
        width: 65px;
        height: 65px;
        border-radius: 50px;
        color: #fff;
        transition: all 0.2s ease;
        border: none;
      }
      button:first-child {
        background: #5072da;
        box-shadow: 0px 8px 20px rgba(80, 114, 218, 0.5);
      }
      button:first-child:hover {
        background: #4867c6;
      }
      button:last-child {
        background: #da5050;
        box-shadow: 0px 8px 20px rgba(218, 80, 80, 0.5);
      }
      button:last-child:hover {
        background: #c44747;
      }
    }

    .separado {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      color: rgba(68, 68, 68, 0.2);
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0;
      hr {
        width: 100%;
        margin: 0 10px;
        border: 0.5px solid rgba(68, 68, 68, 0.2);
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      color: #444444;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      line-height: 22px;
      margin: 20px 0 5px 0;
    }
    .actions__sesion {
      color: #505bda;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;

export default ResetPassword;
