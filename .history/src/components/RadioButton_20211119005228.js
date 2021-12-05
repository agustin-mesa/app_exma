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
`;

export default RadioButton;
