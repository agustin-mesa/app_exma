import React from "react";

const LoadSpinner = () => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>{" "}
    </>
  );
};

export default LoadSpinner;
