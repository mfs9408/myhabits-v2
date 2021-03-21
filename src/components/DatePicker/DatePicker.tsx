import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';

const DatePicker = ({ value, onChange, errors }: any) => {
  const DATE_FORMAT = 'dd.MM.yyyy';

  return (
    <KeyboardDatePicker
      name="dateTo"
      clearable
      fullWidth
      value={value}
      onChange={onChange}
      format={DATE_FORMAT}
      inputVariant="outlined"
      error={errors?.dateTo}
      helperText={errors?.dateTo && errors?.dateTo.message}
    />
  );
};

export default DatePicker;
