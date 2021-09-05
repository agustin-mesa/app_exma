import React, { useState } from "react";
import styled from "styled-components";

const Footer = (props) => {
  const [positionRelative, changePositionRelative] = useState(true);
  const relative = positionRelative;
  return (
    <ContainerFooter>
      <div>
        Developed by{" "}
        <a href="https://byagustinmesa.web.app/" target="_BLANK">
          Agustín Mesa
        </a>
      </div>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  position: ${(props) => {
    if (props.relative) return "relative";
    else return "none";
  }};
  text-align: center;
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