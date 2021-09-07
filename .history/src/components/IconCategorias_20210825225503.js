import React from "react";
import iconComida from "./../images/icon_comida.png";
import iconHogar from "./../images/icon_hogar.png";
import iconCuentas from "./../images/icon_cuentas.png";
import iconCompras from "./../images/icon_compras.png";
import iconTransporte from "./../images/icon_transporte.png";
import iconSalud from "./../images/icon_salud.png";
import iconRopa from "./../images/icon_ropa.png";
import iconDiversion from "./../images/icon_diversion.png";

const IconCategorias = ({ nombre }) => {
  switch (nombre) {
    case "comida":
      return <IconCategory src={iconComida} alt={nombre} />;
    case "hogar":
      return <IconCategory src={iconHogar} alt={nombre} />;
    case "cuentas y pagos":
      return <IconCategory src={iconCuentas} alt={nombre} />;
    case "compras":
      return <IconCategory src={iconCompras} alt={nombre} />;
    case "transporte":
      return <IconCategory src={iconTransporte} alt={nombre} />;
    case "salud e higiene":
      return <IconCategory src={iconSalud} alt={nombre} />;
    case "ropa":
      return <IconCategory src={iconRopa} alt={nombre} />;
    case "diversion":
      return <IconCategory src={iconDiversion} alt={nombre} />;
    default:
      break;
  }
};

export default IconCategorias;
