import React from "react";
import styled from "styled-components";

const UserChecked = ({ emailChecked, fontSize }) => {
  return (
    <Icon
      className={emailChecked ? "fas fa-check-circle" : "far fa-check-circle"}
      fontSize={fontSize}
      checked={emailChecked}
    ></Icon>
  );
};

const Icon = styled.i`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => (props.checked ? "var(--green)" : "var(--red)")};
`;

export default UserChecked;
