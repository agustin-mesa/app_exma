import React from "react";
import styled from "styled-components";

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
        <span>Crear cuenta</span>
      </form>
    </ContainerRegister>
  );
};

const ContainerRegister = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: #505bda;
    font-size: 2.5em;
    font-weight: 700;
  }

  .register__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    span {
      margin: 20px 0;
    }

    p {
      color: #444444;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      margin: 20px 0;
    }
  }

  form {
  }
`;

export default Register;
