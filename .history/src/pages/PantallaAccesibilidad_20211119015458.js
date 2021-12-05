import React, { useState, useEffect } from "react";
import styled from "styled-components";

//---------------- COMPONENTS ----------------
import BtnRegresar from "../components/BtnRegresar";
import PantallaOpcionConfig from "../components/PantallaOpcionConfig";
import RadioButton from "../components/RadioButton";
import LoadSpinner from "../components/LoadSpinner";

const PantallaAccesibilidad = () => {
  // Obtenemos el estado del modo oscuro en el localstorage
  const modeDark = localStorage.getItem("modeDark")
    ? JSON.parse(localStorage.getItem("modeDark"))
    : [];

  const [modoOscuro, changeModoOscuro] = useState(modeDark);
  // Loading al cambiar el theme
  const [loading, changeLoading] = useState(false);

  const handleModoOscuro = (e) => {
    changeLoading(true);

    if (e.target.name === "desactivado") {
      setTimeout(() => {
        changeLoading(false);
        document.body.classList.remove("mode__dark");
        changeModoOscuro(false);
        localStorage.setItem("modeDark", false);
      }, 1500);
    } else {
      setTimeout(() => {
        changeLoading(false);
        document.body.classList.add("mode__dark");
        changeModoOscuro(true);
        localStorage.setItem("modeDark", true);
      }, 1500);
    }
  };

  useEffect(() => {
    console.log(localStorage.getItem("modeDark", JSON.stringify(modoOscuro)));
  }, [modoOscuro]);

  return (
    <>
      <BtnRegresar className="margin" titulo="Pantalla" />
      <ContainerPantAcces>
        <PantallaOpcionConfig
          titulo="Modo oscuro"
          descripcion="Ajusta el aspecto de EXMA para reducir el brillo de la pantalla y descansar la vista."
        />
        <div className="opciones">
          <RadioButtonContent onClick={handleModoOscuro} name="desactivado">
            <RadioButton opcion="Desactivado" checked={!modoOscuro} />
          </RadioButtonContent>
          <RadioButtonContent onClick={handleModoOscuro} name="activado">
            <RadioButton opcion="Activado" checked={modoOscuro} />
          </RadioButtonContent>
        </div>
      </ContainerPantAcces>

      {loading && <LoadSpinner />}
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

const RadioButtonContent = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 15px;
  transition: all 0.2s ease;
  outline: none;
  border: none;
  background: transparent;

  &:hover {
    background: var(--bg__09);
  }
  span {
    color: var(--text__01);
    font-size: 14px;
    font-weight: 700;
  }
`;

export default PantallaAccesibilidad;
