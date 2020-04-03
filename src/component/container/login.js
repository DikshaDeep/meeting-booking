import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../logo.svg';
import TextInput from '../common/input';
import Button from '../common/button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function LoginForm(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <Login {...props} />
    </header>
  );
}

function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('mail@mail.com');
  const [password, setpassword] = React.useState('mail@mail.com');
  const handleChange = (event) => {
    if (event.target.id === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.id === 'pass') {
      setpassword(event.target.value);
    }
  };

  const handleSubmit = () => {
    props.history.push('home');
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextInput id='email' label='Email' value={email} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextInput id='pass' type='password' label='Password' value={password} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' label='login' onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </div>
  );
}
