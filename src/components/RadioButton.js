import React from "react";

const RadioButton = ({ opcion, name, checked }) => {
  return (
    <>
      <span id={name}>{opcion}</span>
      <input type="radio" name={name} checked={checked} onChange={(e) => {}} />
    </>
  );
};

export default RadioButton;
