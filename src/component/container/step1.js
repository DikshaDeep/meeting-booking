import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextInput from '../common/input';
import Button from '../common/button';
import DropDown from '../common/dropdown';
import CustomCalender from '../common/calender';
import { submitStepOne } from '../actions/stepAction';

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

const stepOneForm = (props) => {
  return (
    // <header className="App-header">
    //   <div style={{ backgroundColor:'#b31b1b', width: '100%', height: 40 }}/>
    //   <Grid>
    //     <h4>Meeting Room Booking</h4>
    //   </Grid>

      <BookingForm {...props} />
    
  );
}

function BookingForm(props) {
  const classes = useStyles();
  const [room, setRoom] = React.useState('R1');
  const [name, setName] = React.useState('');
  const [descr, setDescr] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleChange = (event) => {
    if (event.target.id === 'room') {
      setRoom(event.target.value);
    }
    if (event.target.id === 'name') {
      setName(event.target.value);
    }
    if (event.target.id === 'descr') {
      setDescr(event.target.value);
    }
    if (event.target.id === 'date-picker') {
      setSelectedDate(event)
    }
  };

  const handleNext = () => {
    const data = {
      room: room,
      name: name,
      date: selectedDate,
      description: descr
    }
    props.submitStepOne(data);
    props.history.push('step-2');
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DropDown id='room' label='Meeting Room' value={room} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextInput id='name' label='Name' placeholder='Enter Your Name' value={name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextInput id='descr' type='text' label='Meeting Description' placeholder='Enter Meeting Description' value={descr} onChange={handleChange} />
        </Grid>
        
        <Grid item xs={12}>
          <CustomCalender id='date-picker' label='Select Your Date' handleDateChange={handleChange} selectedDate={selectedDate} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' label='Next' onSubmit={handleNext} />
      </Grid>
    </div>
  );
}

export default connect(
  null,
  { submitStepOne }
)(stepOneForm);
