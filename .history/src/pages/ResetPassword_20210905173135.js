import React from "react";
import { ContainerInicio } from "../components/elements/StyledElements";

const ResetPassword = () => {
  return (
    <ContainerInicio>
      <form action="">
        <h3>Olvidé mi contraseña</h3>
        <p className="center">
          Escribe el <b>correo electrónico</b> de la cuenta y te enviaremos un
          link para cambiar a por una <b>nueva clave</b>.
        </p>
      </form>
    </ContainerInicio>
  );
};

export default ResetPassword;
