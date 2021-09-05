import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter>
      Developed by <b>Agustín Mesa</b>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  text-align: center;
  width: 100%;
  color: #505bda;
  font-size: 1em;
  font-weight: 700;
`;

export default Footer;
