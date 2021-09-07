import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../components/elements/StyledElements";
import logo from "../images/logo.png";
const IsNotMobile = () => {
  return (
    <ContainerIsNotMobile>
      <LogoIcon className="grande" src={logo} alt="LOGO EXMA"></LogoIcon>
      <p>
        <b>APP ONLY MOBILE</b>
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
  flex-direction: column;
  p {
    b {
      color: #505bda;
    }
    margin-top: 5px;
    width: 90%;
    text-align: center;
  }
`;

export default IsNotMobile;
