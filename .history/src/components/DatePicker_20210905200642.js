import React from "react";

//---------------- STYLES ----------------
import styled, { keyframes } from "styled-components";

// ---------------- date-fns ----------------
// Librería de fechas
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { es } from "date-fns/locale";

const DatePicker = ({ fecha, changeFecha }) => {
  // Retorna la fecha analizada de la cadena usando la cadena de formato dada.
  const parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale: es });

    // Retorna verdadero si el valor dado es una instancia de Date.
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  // Devuelve la cadena de fecha formateada en el formato dado.
  // El resultado puede variar según la localidad.
  const formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale: es });
  };

  // Meses y días traducidos.
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dias_semana_cortos = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

  return (
    <ContainerInput>
      <DayPickerInput
        keepFocus={true}
        value={fecha}
        onDayChange={(day) => changeFecha(day)}
        format="dd 'de' MMMM', ' yyyy"
        formatDate={formatDate}
        parseDate={parseDate}
        inputProps={{
          readOnly: true,
          className: "userSelectNone",
        }}
        dayPickerProps={{
          months: meses,
          weekdaysShort: dias_semana_cortos,
        }}
      />
    </ContainerInput>
  );
};
const slideDown = keyframes`
    0%{
      transform: translateY(-1.25rem);
      opacity:0;
    }
    100%{
      transform: translateY(1.25rem);
      opacity:1;
    }
`;
const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    margin-top: 10px;
    width: 100%;
    padding: 15px 20px;
    border-radius: 50px;
    transition: all 0.2s ease;
    color: #505bda;
    font-size: 14px;
    font-weight: 700;
    border: none;
    outline: none;
    background: rgba(80, 91, 218, 0.1);
  }

  input:hover {
    background: rgba(80, 91, 218, 0.2);

    outline: none;
  }
  .DayPickerInput-Overlay {
    animation: ${slideDown} 0.3s ease forwards;
    border-radius: 30px;
    box-shadow: 0px 15px 20px rgb(0 0 0 / 20%);
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #505bda;
  }
  .DayPicker-NavButton {
    margin-top: 2px;
  }
  .DayPicker-NavButton--prev {
    margin-right: 20px;
  }
  .DayPicker-NavButton--next {
    margin-right: 0px;
  }
`;

export default DatePicker;
