import React from "react";
import styled from "styled-components";

const RadioButton = ({ opcion }) => {
  return (
    <RadioButtonContent>
      <span>{opcion}</span>
      <input type="radio" name="radio" />
    </RadioButtonContent>
  );
};

const RadioButtonContent = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
`;

export default RadioButton;
