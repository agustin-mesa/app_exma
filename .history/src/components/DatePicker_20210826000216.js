import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { es } from "date-fns/locale";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale: es });
}

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

const DatePicker = ({ fecha, changeFecha }) => {
  return (
    <ContainerInput>
      <DayPickerInput
        value={fecha}
        onDayChange={(day) => changeFecha(day)}
        format="dd 'de' MMMM', ' yyyy"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          months: meses,
          weekdaysShort: dias_semana_cortos,
        }}
      />
    </ContainerInput>
  );
};

const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 15px 20px;
    border-radius: 50px;
    transition: all 0.2s ease;
    color: #505bda;
    font-size: 14px;
    font-weight: 700;
    border: none;
    outline: none;
  }

  input:hover {
    background: rgba(80, 91, 218, 0.1);
    outline: none;
  }
  .DayPickerInput-Overlay {
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
    margin-right: 1.5em;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC");
  }

  .DayPicker-NavButton--next {
    margin: 0 2px;
  }
`;

export default DatePicker;
