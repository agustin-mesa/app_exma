import React from "react";

const RadioButton = ({ opcion, checked }) => {
  return (
    <>
      <span>{opcion}</span>
      <input type="radio" name="radio" checked={checked} onChange={(e) => {}} />
    </>
  );
};

export default RadioButton;
