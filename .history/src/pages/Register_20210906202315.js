import React, { useState } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
//---------------- FIREBASE ----------------
import { auth } from "../firebase/firebase";
//---------------- IMAGES ----------------
import logo from "../images/logo.png";
//---------------- COMPONENTS ----------------
import MsgAlert from "../components/MsgAlert";
import LoadSpinner from "../components/LoadSpinner";
//---------------- STYLES ----------------
import {
  Boton,
  LogoIcon,
  HeaderAuth,
  Input,
  ContainerInicio,
} from "../components/elements/StyledElements";

const Register = () => {
  // Para enviar al usuario
  const history = useHistory();
  // Datos a llenar por el usuario
  const [correo, changeCorreo] = useState("");
  const [password, changePassword] = useState("");
  const [password2, changePassword2] = useState("");
  const [condicionPassword, changeCondicionPassword] = useState(false);
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  // Redireccionar luego de autenticar
  const [redirect, changeRedirect] = useState({});
  // Loading luego de iniciar sesión
  const [loading, changeLoading] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        changeCorreo(e.target.value);
        break;
      case "password":
        changePassword(e.target.value);
        break;
      case "password2":
        changePassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  // Enviar email de verificación para cuentas creadas con Correo y Contraseña
  const sendEmail = async () => {
    await auth.sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent!");
    });
  };

  // Función async - se ejecutará de fondo.
  const handleSubmit = async (e) => {
    e.preventDefault();
    changeAlertState(false);
    changeAlert({});

    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    // Se comprueba que el correo ingresado sea válido
    const regexEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexEmail.test(correo)) {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, ingrese un correo electrónico válido.",
      });
      return;
    }
    if (!regexPassword.test(password)) {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y otra mayúscula. NO puede tener símbolos",
      });
      return;
    }
    // Se comprueba que estén los datos llenos
    if (correo === "" || password === "" || password2 === "") {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Por favor, llene todos los datos.",
      });
      return;
    }
    // Se comprueba que las contraseñas sean iguales
    if (password !== password2) {
      changeAlertState(true);
      changeAlert({
        classAlert: "error",
        msg: "Las contraseñas no son iguales.",
      });
      return;
    }

    // Se crea un usuario con Correo y Contraseña
    try {
      changeLoading(true);
      await auth.createUserWithEmailAndPassword(correo, password);
      sendEmail();
      changeRedirect(true);
      history.push("/gestion/");
    } catch (error) {
      changeLoading(false);
      changeAlertState(true);
      let msg;

      switch (error.code) {
        case "auth/invalid-password":
          msg = "La contraseña tiene que ser de al menos 6 caracteres.";
          break;
        case "auth/email-already-in-use":
          msg = "Ya existe una cuenta con el correo proporcionado.";
          break;
        case "auth/invalid-email":
          msg = "El correo electrónico no es válido";
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

  const activarCondicion = () => {
    return changeCondicionPassword(true);
  };
  const onBlurPassword = () => {
    return changeCondicionPassword(false);
  };

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      {auth.currentUser === null || !redirect ? (
        <>
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
            <form action="">
              <h3>Crea una cuenta en EXMA</h3>
              <Input
                type="email"
                name="email"
                placeholder="Tu dirección de correo electrónico"
                value={correo}
                onChange={handleChange}
              />

              <Input
                type="password"
                name="password"
                placeholder="Crea una contraseña"
                value={password}
                onChange={handleChange}
                onClick={() => activarCondicion("password")}
                onBlur={() => onBlurPassword("password")}
              />
              {condicionPassword && (
                <p>
                  La contraseña debe tener al entre <b>8 y 16 caracteres</b>, al
                  menos <b>un dígito</b>, al menos <b>una minúscula</b> y al
                  menos <b>una mayúscula</b>. <b>NO símbolos</b>.
                </p>
              )}
              <Input
                type="password"
                name="password2"
                placeholder="Confirmación"
                value={password2}
                onChange={handleChange}
              />

              <Boton type="submit" onClick={handleSubmit}>
                Registrarme
              </Boton>
            </form>
            <div className="actions">
              <span>
                Ya tengo una cuenta.{" "}
                <NavLink to="/login" className="actions__sesion">
                  Iniciar sesión
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
        <Redirect to="/gestion" />
      )}
    </>
  );
};

export default Register;
