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
  return <DayPickerInput></DayPickerInput>;
};

export default DatePicker;
