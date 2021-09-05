import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Gestion = () => {
  return (
    <ContainerGestion>
      <div className="bg-relative">
        <div className="gestion__background">
          <div className="gestion__monto">
            <span>$0,00</span>
            <p>TOTAL GASTADO EN EL MES</p>
          </div>
        </div>
        <Navigation />
      </div>
    </ContainerGestion>
  );
};

const ContainerGestion = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #ffffff;

  .bg-relative {
    position: relative;
  }

  .gestion__background {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    border-radius: 30px;
    background: #1a2849;
    position: absolute;
    top: -90px;
    left: 55px;
    right: 55px;
  }
`;

export default Gestion;