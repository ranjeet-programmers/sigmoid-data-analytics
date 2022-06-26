import React from 'react';
import MuiTextField from '@mui/material/TextField';

const TextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...rest
}) => (
  <MuiTextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...rest}
  />
);


export default TextField;