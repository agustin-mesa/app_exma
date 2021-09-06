import React from "react";
import { ContainerInicio } from "../components/elements/StyledElements";

const ResetPassword = () => {
  return (
    <ContainerInicio>
      <form action="">
        <h3>Olvidé mi contraseña</h3>
        <p>
          Escribe el correo electrónico de la cuenta y te enviaremos un link
          para cambiar a por una nueva clave.
        </p>
      </form>
    </ContainerInicio>
  );
};

export default ResetPassword;
