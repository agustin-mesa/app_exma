import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <ContainerRegister>
      <div className="register__header">
        <span>LOGO</span>
        <h2>¡Hola!</h2>
        <p>
          EXMA Es un sistema de registro de gastos. Puedes tener la
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
  }
`;

export default Register;
