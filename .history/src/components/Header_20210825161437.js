import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const Header = () => {
  // Date

  let newDate = new Date(),
    day = newDate.getDate(),
    month = newDate.getMonth() + 1,
    year = newDate.getFullYear();

  return (
    <ContainerHeader>
      <a href="#">LOGO</a>
      <span>
        <Moment locale="fr" format="DD "></Moment>
        de
        <Moment locale="fr" format=" MMMM, YYYY"></Moment>
      </span>
      <a href="#">
        <i className="far fa-user"></i>
      </a>
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

export default Header;
