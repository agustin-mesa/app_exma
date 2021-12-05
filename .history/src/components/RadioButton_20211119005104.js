import React from "react";
import styled from "styled-components";

const RadioButton = () => {
  return (
    <RadioButtonContent>
      <span>{opcion}</span>
      <input type="radio" name="radio" />
    </RadioButtonContent>
  );
};

const RadioButtonContent = styled.button``;

export default RadioButton;
