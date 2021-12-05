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
  color: ${(props) => (props.checked ? "#24cca7" : "rgba(68, 68, 68, 0.6)")};
`;

export default UserChecked;
