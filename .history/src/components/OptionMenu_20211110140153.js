import React from "react";

const OptionMenu = ({ icon, option, text }) => {
  return (
    <li>
      {icon}
      {option}
      {text !== "" && (
        <>
          <br />
          {text}
        </>
      )}
    </li>
  );
};

export default OptionMenu;
