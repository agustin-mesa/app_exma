import React from "react";
import styled from "styled-components";

const UserChecked = ({ emailChecked }) => {
  return (
    <span>
      <Icon
        className={
          emailChecked ? "fas fa-check-circle checked" : "far fa-check-circle"
        }
      ></Icon>
    </span>
  );
};

const Icon = styled.i`
  font-size: 10px;
  color: rgba(68, 68, 68, 0.6);
  &.checked {
    color: #24cca7;
  }
`;

export default UserChecked;
