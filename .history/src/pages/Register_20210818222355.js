import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <ContainerRegister>
      <div className="register__header">
        <span>LOGO</span>
        <h2>¡Hola!</h2>
        <p>
          EXMA es un sistema de registro de gastos. Puedes tener la
          admnistración de tus gastos, ya sea vestimenta, transporte, comida, y
          entre otras categorías, de forma ordenada y sencilla.
        </p>
      </div>
      <form action=""></form>
    </ContainerRegister>
  );
};

const ContainerRegister = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

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
      font-family: Montserrat;
      font-size: 2em;
      font-weight: 700;
      text-align: center;
    }
  }
`;

export default Register;
