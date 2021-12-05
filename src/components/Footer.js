import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        Developed by{" "}
        <a
          href="https://byagustinmesa.web.app"
          target="_BLANK"
          rel="noreferrer"
        >
          Agustín Mesa
        </a>
      </div>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  text-align: center;
  margin: 15px 0;
  color: var(--text__01);
  font-size: 14px;
  font-weight: 500;
  a {
    color: var(--text__03);
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  @media only screen and (max-height: 820px) and (max-width: 500px) {
    div {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 25px;
    }
  }
`;

export default Footer;
