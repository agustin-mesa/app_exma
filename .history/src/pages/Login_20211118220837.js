import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useHistory, Redirect } from "react-router-dom";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
//---------------- FIREBASE ----------------
import firebase from "firebase/app";
import { auth } from "../firebase/firebase";
//---------------- COMPONENTS ----------------
import LoadSpinner from "../components/LoadSpinner";
import MsgAlert from "../components/MsgAlert";
//---------------- STYLES ----------------
import {
  Boton,
  LogoIcon,
  HeaderAuth,
  Input,
  showElement,
  H3,
} from "../components/elements/StyledElements";
import styled from "styled-components";

const Login = () => {
  // Para enviar al usuario
  const history = useHistory();
  // Datos a llenar por el usuario
  const [correo, changeCorreo] = useState("");
  const [password, changePassword] = useState("");
  // Mostrar contraseña
  const [showPass, changeShowPass] = useState(false);
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  // Redireccionar luego de autenticar
  const [redirect, changeRedirect] = useState({});
  // Loading luego de iniciar sesión
  const [loading, changeLoading] = useState(false);

  const showPassword = () => {
    return changeShowPass(!showPass);
  };

  const mostrarAlerta = (boolean, classAlert, msg) => {
    changeAlertState(boolean);
    changeAlert({
      classAlert: classAlert,
      msg: msg,
    });
  };

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

    // Se comprueba el correo ingresado mediante REGEX
    const regexCorreo = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexCorreo.test(correo)) {
      mostrarAlerta(
        true,
        "error",
        "Por favor, ingrese un correo electrónico válido."
      );
      return;
    }
    // Se comprueba que estén los datos llenos
    if (correo === "" || password === "") {
      mostrarAlerta(true, "error", "Por favor, llene todos los datos.");
      return;
    }

    // Iniciar sesión con Correo y Contraseña
    try {
      changeLoading(true);
      await auth.signInWithEmailAndPassword(correo, password);
      history.push("/gestion/");
    } catch (error) {
      changeLoading(false);
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
      mostrarAlerta(true, "error", msg);
    }
  };
  // Login con Google
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      changeRedirect(true);
    } catch (error) {
      let msg;

      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          msg = "La cuenta existe con una credencial diferente.";
          break;
        default:
          msg = "Hubo un error con la autenticación Google.";
          break;
      }
      mostrarAlerta(true, "error", msg);
    }
  };

  // Login con Facebook
  const signInWithFacebook = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      if (!auth.currentUser.emailVerified)
        auth.currentUser.sendEmailVerification();
      changeRedirect(true);
    } catch (error) {
      let msg;

      switch (error.code) {
        case "auth/account-exists-with-different-credential":
          msg = "La cuenta existe con una credencial diferente.";
          break;
        default:
          msg = "Hubo un error con la autenticación con Facebook.";
          break;
      }
      mostrarAlerta(true, "error", msg);
    }
  };
  return (
    <>
      {auth.currentUser === null || !redirect ? (
        <>
          <Helmet>
            <title>Iniciar sesión</title>
          </Helmet>
          {loading && <LoadSpinner />}
          <ContainerLogin>
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
              <H3>Iniciar sesión</H3>
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
              <InputPassword>
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Ingrese su contraseña"
                  value={password}
                  onChange={handleChange}
                />
                {showPass ? (
                  <i className="far fa-eye" onClick={() => showPassword()}></i>
                ) : (
                  <i
                    className="far fa-eye-slash"
                    onClick={() => showPassword()}
                  ></i>
                )}
              </InputPassword>
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
                <NavLink to="/reset-password" className="actions__sesion">
                  Olvidé mi contraseña
                </NavLink>
              </span>
            </div>
            <MsgAlert
              classAlert={alert.classAlert}
              msg={alert.msg}
              alertState={alertState}
              changeAlertState={changeAlertState}
            />
          </ContainerLogin>
        </>
      ) : (
        <Redirect to="/gestion/" />
      )}
    </>
  );
};

const ContainerLogin = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${showElement} 1s ease forwards;

  p {
    color: var(--text__01);
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
        color: var(--text__02);
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

const InputPassword = styled.div`
  position: relative;
  width: 100%;

  i {
    position: absolute;
    right: 5px;
    top: 12px;
    bottom: 12px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
    border-radius: 50px;
    color: rgba(68, 68, 68, 0.3);
    transition: all 0.2s ease;
  }
  i:hover {
    color: #505bda;
  }
`;

export default Login;
