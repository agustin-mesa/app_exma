import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../components/elements/StyledElements";
const InputPassword = ({ name, placeholder, password, changePassword }) => {
  const [showPass, changeShowPass] = useState(false);

  return (
    <InputPass>
      <Input
        type={showPass ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={password}
        onChange={(e) => changePassword(e.target.value)}
      />
      {showPass ? (
        <i className="far fa-eye" onClick={() => changeShowPass(!showPass)}></i>
      ) : (
        <i
          className="far fa-eye-slash"
          onClick={() => changeShowPass(!showPass)}
        ></i>
      )}
    </InputPass>
  );
};

const InputPass = styled.div`
  position: relative;
  width: 100%;
  i {
    position: absolute;
    right: 5px;
    top: 12px;
    bottom: 12px;
    display: flex;
    align-items: center;
    padding: 10px;
    background: var(--bg__01);
    border-radius: 50px;
    color: var(--text__05);
    transition: all 0.2s ease;
  }
  i:hover {
    color: var(--text__03);
  }
`;

export default InputPassword;
