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
  ContainerInicio,
} from "../components/elements/StyledElements";

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

  const showPassword = (password) => {
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
              <div>
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
              </div>
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
          </ContainerInicio>
        </>
      ) : (
        <Redirect to="/gestion/" />
      )}
    </>
  );
};

export default Login;
