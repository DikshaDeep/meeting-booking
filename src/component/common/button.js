import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function PwaButton({ variant, label, onSubmit }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant={variant} color="primary" onClick={onSubmit}>
        {label}
      </Button>
      {/* <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </div>
  );
}