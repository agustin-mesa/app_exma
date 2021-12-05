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

export default UserChecked;
