import React from "react";
//---------------- STYLES ----------------
import { IconCategory } from "./elements/StyledElements";
//---------------- IMAGES ----------------
import iconComida from "./../images/icon_comida.png";
import iconHogar from "./../images/icon_hogar.png";
import iconCuentas from "./../images/icon_cuentas.png";
import iconCompras from "./../images/icon_compras.png";
import iconVenta from "./../images/icon_venta.png";
import iconTransporte from "./../images/icon_transporte.png";
import iconSalud from "./../images/icon_salud.png";
import iconRopa from "./../images/icon_ropa.png";
import iconDiversion from "./../images/icon_diversion.png";
import iconTecnologia from "./../images/icon_tecnologia.png";
import iconMascota from "./../images/icon_mascota.png";
import iconOtros from "./../images/icon_otros.png";

const IconCategorias = ({ nombre }) => {
  /*
    Para obtener cada return se lo llama mediante un .map()
    nombre -> obtengo el nombre de la categoria a retornar.
  */

  switch (nombre) {
    case "Comida":
      return <IconCategory src={iconComida} alt={nombre} />;
    case "Hogar":
      return <IconCategory src={iconHogar} alt={nombre} />;
    case "Cuentas y Pagos":
      return <IconCategory src={iconCuentas} alt={nombre} />;
    case "Compras":
      return <IconCategory src={iconCompras} alt={nombre} />;
    case "Venta":
      return <IconCategory src={iconVenta} alt={nombre} />;
    case "Transporte":
      return <IconCategory src={iconTransporte} alt={nombre} />;
    case "Salud e Higiene":
      return <IconCategory src={iconSalud} alt={nombre} />;
    case "Ropa":
      return <IconCategory src={iconRopa} alt={nombre} />;
    case "Diversión":
      return <IconCategory src={iconDiversion} alt={nombre} />;
    case "Tecnología":
      return <IconCategory src={iconTecnologia} alt={nombre} />;
    case "Mascota":
      return <IconCategory src={iconMascota} alt={nombre} />;
    case "Otros":
      return <IconCategory src={iconOtros} alt={nombre} />;
    default:
      break;
  }
};

export default IconCategorias;
