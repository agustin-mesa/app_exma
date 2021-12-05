import React from "react";

const UserChecked = ({ emailChecked }) => {
  return (
    <span>
      <i
        className={
          emailChecked ? "fas fa-check-circle checked" : "far fa-check-circle"
        }
      ></i>
    </span>
  );
};

const Icon = styled.i`i {
    font-size: 10px;
    color: rgba(68, 68, 68, 0.6);
  i.checked {
    color: #24cca7;
  }`;

export default UserChecked;
