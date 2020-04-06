import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function TestTextField({
  id,
  type,
  label,
  placeholder,
  value,
  onChange
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div>
        <TextField
          id={id ? id : "filled-name"}
          type={type}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          variant="outlined"
        />
      </div>
    </div>
  );
}