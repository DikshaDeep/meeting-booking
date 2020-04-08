import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import TextInput from '../common/input';
import Button from '../common/button';
import DropDown from '../common/dropdown';
import { submitStepOne } from '../actions/stepAction';
import './style.css';

const stepOneForm = (props) => {
  return (

    <BookingForm {...props} />
    
  );
}

function BookingForm(props) {
  const [room, setRoom] = React.useState('R1');
  const [name, setName] = React.useState('');
  const [descr, setDescr] = React.useState('');

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

  };

  const handleNext = () => {
    const data = {
      room: room,
      name: name,
      description: descr
    }
    props.submitStepOne(data);
    if (room && name && descr) {
      props.history.push('step-2');
    } else {
      alert('Please fill all fields');
    }
  }
  return (
    <div className='root'>
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
