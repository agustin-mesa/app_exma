import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import logo from "../images/logo.png";

import firebase from "firebase/app";
import { auth } from "../firebase/firebase";

import MsgAlert from "../components/MsgAlert";
import {
  Boton,
  LogoIcon,
  HeaderAuth,
  Input,
  ContainerInicio,
} from "../components/elements/StyledElements";

const Login = () => {
  // Para enviar al usuario
  const history = useHistory();
  // Datos a llenar por el usuario
  const [correo, changeCorreo] = useState("");
  const [password, changePassword] = useState("");
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  // Para redireccionar luego de autenticar con Google o Facebook
  const [redirect, changeRedirect] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      changeCorreo(e.target.value);
    } else if (e.target.name === "password") {
      changePassword(e.target.value);
    }
  };

  // Función async - se ejecutará de fondo.
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
    if (correo === "" || password === "") {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, llene todos los datos.",
      });
      return;
    }

    // Iniciar sesión con Correo y Contraseña
    try {
      changeAlertState(true);
      changeAlert({
        classAlert: "exito",
        msg: "Redireccionando...",
      });
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/gestion/");
    } catch (error) {
      changeAlertState(true);
      let msg;

      switch (error.code) {
        case "auth/wrong-password":
          msg = "La contraseña no es correcta. Inténtelo otra vez.";
          break;
        case "auth/user-not-found":
          msg = "El correo ingresado no se encuentra registrado.";
          break;
        default:
          msg = "Hubo un error al intentar crear la cuenta.";
          break;
      }

      changeAlert({
        classAlert: "error",
        msg: msg,
      });
    }
  };

  // Login con Google
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      changeRedirect(true);
    } catch (error) {
      changeAlertState(true);
      let msg;

      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          msg = "La cuenta existe con una credencial diferente.";
          break;
        default:
          msg = "Hubo un error con la autenticación con Google.";
          break;
      }

      changeAlert({
        classAlert: "error",
        msg: msg,
      });
    }
  };

  // Login con Facebook
  const signInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      changeRedirect(true);
    } catch (error) {
      changeAlertState(true);
      let msg;

      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          msg = "La cuenta existe con una credencial diferente.";
          break;
        default:
          msg = "Hubo un error con la autenticación con Facebook.";
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
      {!redirect ? (
        <>
          <Helmet>
            <title>Iniciar sesión</title>
          </Helmet>
          <ContainerInicio>
            <HeaderAuth>
              <NavLink to="/" exact>
                <LogoIcon
                  className="grande"
                  src={logo}
                  alt="LOGO EXMA"
                ></LogoIcon>
              </NavLink>
            </HeaderAuth>
            <form action="" onSubmit={handleSubmit}>
              <h3>Iniciar sesión</h3>
              <div className="auth__face-google">
                <button onClick={() => signInWithFacebook()}>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button onClick={() => signInWithGoogle()}>
                  <i className="fab fa-google"></i>
                </button>
              </div>
              <div className="separado">
                <hr /> o <hr />
              </div>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={handleChange}
              />
              <Boton type="submit" onClick={handleSubmit}>
                Iniciar sesión
              </Boton>
            </form>
            <div className="actions">
              <span>
                No tengo una cuenta.{" "}
                <NavLink to="/register" className="actions__sesion">
                  Registrarme
                </NavLink>{" "}
                <br />
                <NavLink to="/register" className="actions__sesion">
                  Olvidé mi contraseña
                </NavLink>
              </span>
            </div>
            <MsgAlert
              classAlert={alert.classAlert}
              msg={alert.msg}
              alertState={alertState}
              changeAlertState={changeAlertState}
              load={alert.load}
            />
          </ContainerInicio>
        </>
      ) : (
        <Redirect to="/gestion/" />
      )}
    </>
  );
};

export default Login;
