import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>
      <ContainerLogin>
        <div className="login__header">
          <span>LOGO</span>
        </div>
        <form action="">
          <h3>Iniciar sesión</h3>
          <div className="auth__face-google">
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
            <span>
              <i class="fab fa-google"></i>
            </span>
          </div>
          <div className="separado">
            <hr /> o <hr />
          </div>
          <input type="email" name="email" placeholder="Correo electrónico" />
          <input
            type="password"
            name="password"
            placeholder="Crea una contraseña"
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <div className="login__actions">
          <span>
            No tengo una cuenta.{" "}
            <NavLink to="/register" className="actions__sesion">
              Registrarme
            </NavLink>
          </span>
          <NavLink to="/register" className="actions__sesion">
            Modo Invitado
          </NavLink>
        </div>
        <Footer />
      </ContainerLogin>
    </>
  );
};

const ContainerLogin = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .login__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
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
      font-size: 2em;
      font-weight: 700;
      margin: 30px 0 10px 0;
    }

    .auth__face-google {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      span {
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
      }
      span:first-child {
        background: #5072da;
        box-shadow: 0px 8px 20px rgba(80, 114, 218, 0.5);
      }
      span:last-child {
        background: #da5050;
        box-shadow: 0px 8px 20px rgba(218, 80, 80, 0.5);
      }
    }

    .separado {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      hr {
        width: 100%;
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

    button {
      box-shadow: 0px 8px 20px rgba(176, 99, 197, 0.5);
      border-radius: 50px;
      background: #505bda;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-top: 20px;
      padding: 12px 25px;
      outline: none;
      border: none;
      transition: all 0.2s ease;
    }
    button:hover {
      background: #4852c4;
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
