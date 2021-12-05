import React from "react";

const RadioButton = ({ opcion, name, checked }) => {
  return (
    <>
      <label name={name}>{opcion}</label>
      <input type="radio" name={name} checked={checked} onChange={(e) => {}} />
    </>
  );
};

export default RadioButton;
