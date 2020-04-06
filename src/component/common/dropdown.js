import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { rooms } from '../mock/constant';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function customDropdown({
  id,
  label,
  helperText,
  onChange,
  room
}) {
  const classes = useStyles();
  // const [currency, setCurrency] = React.useState('EUR');

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={id}
          select
          label={label}
          value={room}
          onChange={onChange}
          SelectProps={{
            native: true,
          }}
          helperText={helperText}
          variant="outlined"
        >
          {rooms.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}