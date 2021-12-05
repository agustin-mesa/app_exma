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
  position: absolute;
  top: 0;
  right: 5px;
  bottom: 0;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default ModeDark;
