import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  text-align: center;
  width: 100%;
  margin: 15px 0;
  color: #444444;
  font-size: 14px;
  font-weight: 500;
  background: red;
  a {
    color: #505bda;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  @media only screen and (max-height: 820px) and (max-width: 500px) {
    div {
      position: absolute;
      bottom: 25px;
    }
  }
`;

export default Footer;
