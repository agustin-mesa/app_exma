import React, { useState, useRef } from "react";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

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
  showElement,
} from "../components/elements/StyledElements";

const Register = () => {
  // Para enviar al usuario
  const history = useHistory();
  // Datos a llenar por el usuario
  const [nombre, changeNombre] = useState("");
  const [correo, changeCorreo] = useState("");
  const [password, changePassword] = useState("");
  const [password2, changePassword2] = useState("");
  const [condicionPassword, changeCondicionPassword] = useState(false);
  // Mostrar contraseña
  const [showPass1, changeShowPass1] = useState(false);
  const [showPass2, changeShowPass2] = useState(false);
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});
  // Redireccionar luego de autenticar
  // Loading luego de iniciar sesión
  const [loading, changeLoading] = useState(false);

  //  ReCaptcha
  const captcha = useRef(null);
  const onChange = () => {
    if (captcha.current.getValue()) {
    }
  };

  const showPassword = (password) => {
    password === 1 ? changeShowPass1(!showPass1) : changeShowPass2(!showPass2);
  };

  const mostrarAlerta = (boolean, classAlert, msg) => {
    changeAlertState(boolean);
    changeAlert({
      classAlert: classAlert,
      msg: msg,
    });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "nombre":
        changeNombre(e.target.value);
        break;
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

  // Función async - se ejecutará de fondo.
  const handleSubmit = async (e) => {
    e.preventDefault();
    changeAlertState(false);
    changeAlert({});

    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    // Se comprueba que el correo ingresado sea válido
    const regexEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!regexEmail.test(correo)) {
      mostrarAlerta(
        true,
        "error",
        "Por favor, ingrese un correo electrónico válido."
      );

      return;
    }
    if (!regexPassword.test(password)) {
      mostrarAlerta(
        true,
        "error",
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y otra mayúscula. NO puede tener símbolos"
      );

      return;
    }
    // Se comprueba que estén los datos llenos
    if (nombre === "" || correo === "" || password === "" || password2 === "") {
      mostrarAlerta(true, "error", "Por favor, llene todos los datos.");

      return;
    }
    // Se comprueba que las contraseñas sean iguales
    if (password !== password2) {
      mostrarAlerta(true, "error", "Las contraseñas no son iguales.");

      return;
    }
    if (captcha.current.getValue()) {
      captcha.current.reset();
    } else {
      mostrarAlerta(true, "error", "Por favor, acepte el captcha.");
      return;
    }

    // Se crea un usuario con Correo y Contraseña
    try {
      changeLoading(true);
      await auth
        .createUserWithEmailAndPassword(correo, password)
        .then((result) => {
          return result.user.updateProfile({ displayName: nombre });
        });
      // Enviar email de verificación para cuentas creadas con Correo y Contraseña
      auth.currentUser.sendEmailVerification();
      history.push("/gestion/");
    } catch (error) {
      changeLoading(false);
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
      mostrarAlerta(true, "error", msg);
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
      {auth.currentUser === null ? (
        <>
          {loading && <LoadSpinner />}
          <ContainerRegister>
            <HeaderAuth>
              <NavLink to="/" exact>
                <LogoIcon
                  className="grande"
                  src={logo}
                  alt="LOGO EXMA"
                ></LogoIcon>
              </NavLink>
            </HeaderAuth>
            <Formulario action="">
              <h3>Crea una cuenta en EXMA</h3>
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre y apellido (o apodo)"
                value={nombre}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Tu dirección de correo electrónico"
                value={correo}
                onChange={handleChange}
              />

              <div className="pass">
                <Input
                  type={showPass1 ? "text" : "password"}
                  name="password"
                  placeholder="Crea una contraseña"
                  value={password}
                  onChange={handleChange}
                  onClick={() => activarCondicion("password")}
                  onBlur={() => onBlurPassword("password")}
                />
                {showPass1 ? (
                  <i className="far fa-eye" onClick={() => showPassword(1)}></i>
                ) : (
                  <i
                    className="far fa-eye-slash"
                    onClick={() => showPassword(1)}
                  ></i>
                )}
              </div>
              {condicionPassword && (
                <p>
                  La contraseña debe tener entre <b>8 y 16 caracteres</b>, al
                  menos <b>un número</b>, <b>una minúscula</b> y{" "}
                  <b>una mayúscula</b>. <b>NO símbolos</b>.
                </p>
              )}
              <div className="pass">
                <Input
                  type={showPass2 ? "text" : "password"}
                  name="password2"
                  placeholder="Repita la contraseña"
                  value={password2}
                  onChange={handleChange}
                />
                {showPass2 ? (
                  <i className="far fa-eye" onClick={() => showPassword(2)}></i>
                ) : (
                  <i
                    className="far fa-eye-slash"
                    onClick={() => showPassword(2)}
                  ></i>
                )}
              </div>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LcLPBsdAAAAAORBh-G8etHEMrJFw2PR3RYM4w5H"
                onChange={onChange}
                className="recaptcha"
              />
              <Boton type="submit" onClick={handleSubmit}>
                Registrarme
              </Boton>
            </Formulario>
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
          </ContainerRegister>
        </>
      ) : (
        <Redirect to="/gestion" />
      )}
    </>
  );
};

const ContainerRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: red;
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

const Formulario = styled.form`
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
  .pass {
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
  }
  .recaptcha {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0;
  }
`;

export default Register;
