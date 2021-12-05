import React from "react";

const RadioButton = ({ opcion, checked }) => {
  return (
    <>
      <span>{opcion}</span>
      {checked ? (
        <input type="radio" name="radio" checked />
      ) : (
        <input type="radio" name="radio" onChange={(e) => {}} />
      )}
    </>
  );
};

export default RadioButton;
