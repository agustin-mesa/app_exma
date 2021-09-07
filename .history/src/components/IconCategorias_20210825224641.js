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
      return iconComida;
    case "hogar":
      return iconHogar;
    case "cuentas y pagos":
      return iconCuentas;
    case "compras":
      return iconCompras;
    case "transporte":
      return iconTransporte;
    case "salud e higiene":
      return iconSalud;
    case "ropa":
      return iconRopa;
    case "diversion":
      return iconDiversion;
    default:
      break;
  }
};

export default IconCategorias;
