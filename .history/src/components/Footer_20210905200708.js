import React from "react";

//---------------- REACT-ROUTER ----------------
import { NavLink } from "react-router-dom";

//---------------- STYLES ----------------
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
  position: relative;
  text-align: center;
  width: 100%;
  margin-top: 15px;
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
      bottom: 25px;
    }
  }
`;

export default Footer;
