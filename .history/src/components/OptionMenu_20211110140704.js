import React from "react";

const OptionMenu = ({ icono, opcion, texto }) => {
  return (
    <li>
      <i className={icono}></i>
      
      <span>{opcion}</span>

      {texto !== "" && (
        <>
          <br />
          <p>{texto}</p>
        </>
      )}
    </li>
  );
};

export default OptionMenu;
