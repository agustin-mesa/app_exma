import React, { useState } from "react";
import { ContainerInicio, Input } from "../components/elements/StyledElements";

const ResetPassword = () => {
  const [correo, changeCorreo] = useState("");
  const handleChange = (e) => {
    changeCorreo(e.target.value);
  };
  return (
    <ContainerInicio>
      <form action="">
        <h3>Olvidé mi contraseña</h3>
        <p className="center">
          Escribe el <b>correo electrónico</b> de la cuenta y te enviaremos un
          link para cambiar a por una <b>nueva clave</b>.
        </p>
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={handleChange}
        />
      </form>
    </ContainerInicio>
  );
};

export default ResetPassword;
