import React from "react";

const OptionMenu = ({ icono, opcion, texto }) => {
  return (
    <li>
      {icono}
      {opcion}
      {texto !== "" && (
        <>
          <br />
          {texto}
        </>
      )}
    </li>
  );
};

export default OptionMenu;
