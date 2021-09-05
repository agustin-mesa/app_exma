import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import logo from "../images/logo.png";

import firebase from "firebase/app";
import { auth } from "../firebase/firebase";

import MsgAlert from "../components/MsgAlert";
import Footer from "../components/Footer";
import {
  Boton,
  LogoIcon,
  HeaderAuth,
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

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        changeRedirect(true);
      })
      .catch((error) => {
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
      });
  };

  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      {!redirect ? (
        <>
          <HeaderAuth>
            <NavLink to="/">
              <LogoIcon
                className="grande"
                src={logo}
                alt="LOGO EXMA"
              ></LogoIcon>
            </NavLink>
          </HeaderAuth>
          <ContainerLogin>
            <form action="" onSubmit={handleSubmit}>
              <h3>Iniciar sesión</h3>
              <div className="auth__face-google">
                <button>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button onClick={() => signInWithGoogle()}>
                  <i className="fab fa-google"></i>
                </button>
              </div>
              <div className="separado">
                <hr /> o <hr />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={handleChange}
              />
              <input
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
            <div className="login__actions">
              <span>
                No tengo una cuenta.{" "}
                <NavLink to="/register" className="actions__sesion">
                  Registrarme
                </NavLink>
              </span>
            </div>
            <MsgAlert
              classAlert={alert.classAlert}
              msg={alert.msg}
              alertState={alertState}
              changeAlertState={changeAlertState}
            />
            <Footer />
          </ContainerLogin>
        </>
      ) : (
        <Redirect to="/gestion/" />
      )}
    </>
  );
};

const ContainerLogin = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
      margin-bottom: 10px;
      text-align: center;
      margin: 20px 0 15px;
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
      color: #444444;
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0;
      hr {
        width: 100%;
        margin: 0 10px;
      }
    }

    input {
      width: 100%;
      padding: 10px 15px;
      margin: 10px 0;
      border-radius: 50px;
      border: solid 1px #505bda;
      color: #444444;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    input:focus {
      outline: none;
      color: #505bda;
    }
    input::placeholder {
      color: rgba(68, 68, 68, 0.5);
      font-weight: 500;
    }
  }

  .login__actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      color: #444444;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
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

export default Login;