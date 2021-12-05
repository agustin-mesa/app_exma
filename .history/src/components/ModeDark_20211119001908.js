import React from "react";
import styled from "styled-components";

const ModeDark = () => {
  return (
    <ModeDarkButton>
      <div className="selected"></div>
      <span>OFF</span>
      <span>ON</span>
    </ModeDarkButton>
  );
};

const ModeDarkButton = styled.div`
  background: red;
  display: inline-block;
  width:100%;
`;

export default ModeDark;
