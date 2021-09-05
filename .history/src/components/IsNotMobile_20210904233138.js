import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../components/elements/StyledElements";
import logo from "../images/logo.png";
const IsNotMobile = () => {
  return (
    <ContainerIsNotMobile>
      <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
      <p>
        <b>EXMA</b> es una <b>app only mobile.</b>
        <br />
        Entra desde tu celular y vive la experiencia :)
      </p>
    </ContainerIsNotMobile>
  );
};

const ContainerIsNotMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    b {
      color: #505bda;
    }
    width: 90%;
    text-align: center;
  }
`;

export default IsNotMobile;
