import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { auth } from "../firebase/firebase";
import logo from "../images/logo.png";

import { LogoIcon } from "../components/elements/StyledElements";
import MsgAlert from "../components/MsgAlert";
import Footer from "../components/Footer";
import { Boton } from "../components/elements/StyledElements";

const Register = () => {
  // Para enviar al usuario
  const history = useHistory();
  // Datos a llenar por el usuario
  const [correo, changeCorreo] = useState("");
  const [password, changePassword] = useState("");
  const [password2, changePassword2] = useState("");
  // Alertas
  const [alertState, changeAlertState] = useState(false);
  const [alert, changeAlert] = useState({});

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
      await auth.createUserWithEmailAndPassword(correo, password);
      history.push("/gestion/");
    } catch (error) {
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

  return (
    <>
      <Helmet>
        <title>Crear cuenta</title>
      </Helmet>
      <ContainerRegister>
        <div className="register__header">
          <a href="/home">
            <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
          </a>
        </div>
        <form action="">
          <h3>Crea una cuenta en EXMA</h3>
          <input
            type="email"
            name="email"
            placeholder="Tu dirección de correo electrónico"
            value={correo}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Crea una contraseña"
            value={password}
            onChange={handleChange}
          />
          <p>
            La contraseña debe tener al entre 8 y 16 caracteres, al menos un
            dígito, al menos una minúscula y al menos una mayúscula. NO puede
            tener otros símbolos. Ejemplo: w3Unpocodet0d0
          </p>
          <input
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
        <div className="register__actions">
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
        <Footer />
      </ContainerRegister>
    </>
  );
};

const ContainerRegister = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;

  .register__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      margin: 20px 0;
    }
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
      margin-bottom: 10px;
      text-align: center;
      margin: 20px 0 15px;
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

  .register__actions {
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

export default Register;
