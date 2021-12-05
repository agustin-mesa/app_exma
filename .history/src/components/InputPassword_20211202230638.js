import React from "react";
import styled from "styled-components";

const InputPassword = () => {
  const [password, changePassword] = useState("");
  const [showPass, changeShowPass] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "password":
        changePassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <InputPass>
      <Input
        type={showPass ? "text" : "password"}
        name="password"
        placeholder="Repita la contraseña"
        value={password}
        onChange={handleChange}
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
