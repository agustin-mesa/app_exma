import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const DatePicker = ({ fecha, changeFecha }) => {
  return (
    <ContainerInput>
      <DayPickerInput value={fecha} onDayChange={(day) => changeFecha(day)} />
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
  }

  input:hover {
    background: rgba(80, 91, 218, 0.1);
    outline: none;
  }
`;

export default DatePicker;
