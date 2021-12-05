import React from "react";

const RadioButton = ({ opcion, checked }) => {
  return (
    <>
      <label>{opcion}</label>
      <input type="radio" name="radio" checked={checked} />
    </>
  );
};

export default RadioButton;
