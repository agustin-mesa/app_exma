import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import BtnRegresar from "../components/BtnRegresar";
//---------------- STYLES ----------------
import {
  ContainerInicio,
  Input,
  LogoIcon,
  HeaderAuth,
  Boton,
} from "../components/elements/StyledElements";

const ResetPassword = () => {
  const [correo, changeCorreo] = useState("");
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  // Loading luego de iniciar sesión
  const [loading, changeLoading] = useState(false);
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
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, ingrese un correo electrónico válido.",
      });
      return;
    }
    // Se comprueba que estén los datos llenos
    if (correo === "") {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, introduzca su correo electrónico.",
      });
      return;
    }

    // Enviar link de reseteo de password
    try {
      await auth.sendPasswordResetEmail(correo);
      changeAlertState(true);
      changeAlert({
        classAlert: "exito",
        msg: "Link enviado correctamente, verifica tu correo.",
      });
    } catch (error) {
      changeAlertState(true);
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

      changeAlert({
        classAlert: "error",
        msg: msg,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Olvidé mi contraseña</title>
      </Helmet>
      <ContainerInicio>
        <ContainerBtnRegresar>
          <BtnRegresar ruta="/login" />
        </ContainerBtnRegresar>
        <HeaderAuth>
          <NavLink to="/" exact>
            <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
          </NavLink>
        </HeaderAuth>
        <form action="">
          <h3>Olvidé mi contraseña</h3>
          <p className="center">
            Escribe el <b>correo electrónico</b> a recuperar y te enviaremos un
            link para que crear una <b>nueva clave</b>.
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
      </ContainerInicio>
    </>
  );
};

const ContainerBtnRegresar = styled.div`
  width: 100%;
  display: flex;
`;

export default ResetPassword;
