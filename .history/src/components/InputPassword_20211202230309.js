import React from "react";
import styled from "styled-components";

const InputPassword = () => {
  return (
    <InputPass>
      <Input
        type={showPass2 ? "text" : "password"}
        name="password2"
        placeholder="Repita la contraseña"
        value={password2}
        onChange={handleChange}
      />
      {showPass2 ? (
        <i className="far fa-eye" onClick={() => showPassword(2)}></i>
      ) : (
        <i className="far fa-eye-slash" onClick={() => showPassword(2)}></i>
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
