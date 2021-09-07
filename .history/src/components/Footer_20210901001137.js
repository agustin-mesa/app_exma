import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter>
      Developed by{" "}
      <a href="https://byagustinmesa.web.app/" target="_BLANK">
        Agustín Mesa
      </a>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  text-align: center;
  width: 100%;
  color: #444444;
  font-size: 14px;
  font-weight: 500;
  margin-top: 30px;
  a {
    color: #505bda;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  @media only screen and (max-height: 735px) {
    & {
      width: none;
      position: absolute;
      bottom: 25px;
    }
  }
`;

export default Footer;
