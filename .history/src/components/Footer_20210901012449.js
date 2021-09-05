import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        Developed by{" "}
        <NavLink to="https://byagustinmesa.web.app/" target="_BLANK">
          Agustín Mesa
        </NavLink>
      </div>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  position: relative;
  text-align: center;
  height: 25vh;
  width: 100%;
  color: #444444;
  font-size: 14px;
  font-weight: 500;
  a {
    color: #505bda;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  @media only screen and (max-height: 820px) and (max-width: 500px) {
    div {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25px;
    }
  }
`;

export default Footer;
