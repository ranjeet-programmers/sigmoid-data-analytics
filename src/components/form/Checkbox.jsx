import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';

const Checkbox = ({ input, label,...rest}) => (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={input.value ? true : false}
          onChange={input.onChange}
          {...rest}
        />
      }
      label={label}
    />
);

export default Checkbox;