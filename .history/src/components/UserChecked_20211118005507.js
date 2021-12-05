import React from "react";
import styled from "styled-components";

const UserChecked = ({ emailChecked, fontSize }) => {
  return (
    <Icon
      className={
        emailChecked ? "fas fa-check-circle checked" : "far fa-check-circle"
      }
      fontSize={fontSize}
    ></Icon>
  );
};

const Icon = styled.i`
  font-size: ${(props) => props.fontSize}px;
  color: rgba(68, 68, 68, 0.6);
  &.checked {
    color: #24cca7;
  }
`;

export default UserChecked;
