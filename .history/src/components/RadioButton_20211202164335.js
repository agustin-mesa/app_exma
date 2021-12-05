import React from "react";

const RadioButton = ({ opcion, name, checked }) => {
  return (
    <>
      <label htmlFor={name}>{opcion}</label>
      <input type="radio" name={name} checked={checked} onChange={(e) => {}} />
    </>
  );
};

export default RadioButton;
