import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import "moment/locale/es";

const Header = () => {
  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>
        <Moment locale="es" format="DD "></Moment>
        de
        <Moment locale="es" format=" MMMM, YYYY"></Moment>
      </span>
      <a href="#">
        <i className="far fa-user"></i>
      </a>
      <SignOut>s</SignOut>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px 10px 20px;
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;

  i {
    color: #ffffff;
    font-size: 1.8em;
  }
`;

const SignOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export default Header;
