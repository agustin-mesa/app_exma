import React from "react";
import styled from "styled-components";

const RadioButton = ({ opcion, checked }) => {
  return (
    <RadioButtonContent>
      <span>{opcion}</span>
      {checked ? (
        <input type="radio" name="radio" checked />
      ) : (
        <input type="radio" name="radio" />
      )}
    </RadioButtonContent>
  );
};

const RadioButtonContent = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 15px;
  transition: all 0.2s ease;
  outline: none;
  border: none;
  background: transparent;

  &:hover {
    background: var(--bg__09);
  }
  span {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 700;
  }
`;

export default RadioButton;
