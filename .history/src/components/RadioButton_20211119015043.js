import React from "react";

const RadioButton = ({ opcion, checked, funcion }) => {
  return (
    <>
      <span>{opcion}</span>
      <input type="radio" name="radio" checked={checked} onClick={() => funcion} onChange={(e) => {}} />
    </>
  );
};

export default RadioButton;
