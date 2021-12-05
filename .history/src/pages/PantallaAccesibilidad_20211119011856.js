import React, { useState } from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import PantallaOpcionConfig from "../components/PantallaOpcionConfig";

import RadioButton from "../components/RadioButton";

const PantallaAccesibilidad = () => {
  const [modoOscuro, changeModoOscuro] = useState(false);

  const handleModoOscuro = (e) => {
    console.log(e.target);
    if (e.target.name === "desactivado") return changeModoOscuro(false);
    else return changeModoOscuro(true);
  };

  return (
    <>
      <BtnRegresar className="margin" titulo="Pantalla" />
      <ContainerPantAcces>
        <PantallaOpcionConfig
          titulo="Modo oscuro"
          descripcion="Ajusta el aspecto de EXMA para reducir el brillo de la pantalla y descansar la vista."
        />
        <div className="opciones">
          <div onClick={handleModoOscuro} name="desactivado">
            <RadioButton opcion="Desactivado" checked={!modoOscuro} />
          </div>
          <div onClick={handleModoOscuro} name="activado">
            <RadioButton opcion="Activado" checked={modoOscuro} />
          </div>
        </div>
      </ContainerPantAcces>
    </>
  );
};

const ContainerPantAcces = styled.div`
  display: flex;
  flex-direction: column;
  .opciones {
    margin: 10px 0 15px;
  }
`;

export default PantallaAccesibilidad;
