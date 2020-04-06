import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CustomCalender({
  id,
  label,
  selectedDate,
  handleDateChange
}) {
  // The first commit of Material-UI
  // 
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          disablePast
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id={id}
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}