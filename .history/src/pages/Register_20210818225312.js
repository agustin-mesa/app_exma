import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <ContainerRegister>
      <div className="register__header">
        <span>LOGO</span>
        <h2>¡Hola!</h2>
        <p>
          <b>EXMA</b> es una <b>app web de registro de gastos</b>. Puedes tener
          la admnistración de tus gastos, ya sea vestimenta, transporte, comida,
          y entre otras categorías, de forma ordenada y sencilla.
        </p>
      </div>
      <form action="">
        <h3>Crear cuenta</h3>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="email" name="email" placeholder="Correo electrónico" />
        <input
          type="password"
          name="password"
          placeholder="Crea una contraseña"
        />
        <button type="submit">Registrarme</button>
      </form>
      <div className="register__actions">
        <span>
          Ya tengo una cuenta.{" "}
          <NavLink to="/iniciar-sesion" className="actions__sesion">
            Iniciar sesión
          </NavLink>
        </span>
        <NavLink to="/iniciar-sesion">Modo Invitado</NavLink>
      </div>
    </ContainerRegister>
  );
};

const ContainerRegister = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .register__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      margin: 20px 0;
    }
    h2 {
      color: #505bda;
      font-size: 2.5em;
      font-weight: 700;
    }
    p {
      color: #444444;
      font-size: 1em;
      font-weight: 500;
      line-height: 25px;
      text-align: center;
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
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 10px 15px;
      margin: 10px 0;
      border-radius: 50px;
      border: solid 1px #505bda;
      color: #444444;
      font-size: 1em;
      font-weight: 600;
      transition: all 0.2s ease;
    }
    input:focus {
      outline: none;
      color: #505bda;
    }
    input::placeholder {
      color: rgba(68, 68, 68, 0.6);
      font-weight: 600;
    }

    button {
      box-shadow: 0px 8px 20px rgba(176, 99, 197, 0.5);
      border-radius: 50px;
      background: #505bda;
      color: #ffffff;
      font-size: 1em;
      font-weight: 700;
      text-align: center;
      margin-top: 20px;
      padding: 12px 25px;
      outline: none;
      border: none;
    }
  }

  .register__actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      color: #444444;
      font-size: 1em;
      font-weight: 500;
      margin: 10px 0 5px 0;
    }
    .actions__sesion {
      color: #505bda;
      font-size: 1em;
      font-weight: 700;
      text-decoration: none;
    }
  }
`;

export default Register;
