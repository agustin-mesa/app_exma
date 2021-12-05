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
  right: 5px;
  padding: 15px 5px;
  display: flex;
  align-items: center;
`;

export default ModeDark;
