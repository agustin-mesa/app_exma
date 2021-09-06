import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import {
  ContainerInicio,
  Input,
  LogoIcon,
  HeaderAuth,
} from "../components/elements/StyledElements";

const ResetPassword = () => {
  const [correo, changeCorreo] = useState("");
  const handleChange = (e) => {
    changeCorreo(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Olvidé mi contraseña</title>
      </Helmet>
      <ContainerInicio>
        <HeaderAuth>
          <NavLink to="/" exact>
            <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
          </NavLink>
        </HeaderAuth>
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
    </>
  );
};

export default ResetPassword;
