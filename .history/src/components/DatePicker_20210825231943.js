import React from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parse)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const DatePicker = () => {
  return (
    <ContainerInput>
      <DayPickerInput />
    </ContainerInput>
  );
};

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 20px;
  width: 100%;
  border-radius: 50px;
  transition: all 0.2s ease;
  color: #505bda;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background: rgba(80, 91, 218, 0.1);
  }
`;

export default DatePicker;
