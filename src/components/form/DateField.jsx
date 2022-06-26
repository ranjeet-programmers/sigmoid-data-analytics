import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";

const DateField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label={label}
        error={touched && invalid}
        helperText={touched && error}
        renderInput={(params) => <TextField {...params} />}
        {...input}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default DateField;
