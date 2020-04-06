import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import Button from '../common/button';
import { SubmitBooking } from '../actions/stepAction';

import { timing } from '../mock/constant';
import './style.css';

function stepTwo(props) {
  const [selectedTime, setSelectedTime] = React.useState('');
  const selectTime = (time) => {
    setSelectedTime(time);
  }
  const submitBooking = () => {
    SubmitBooking(selectedTime);
    alert('submit booking');
  }
  console.log('stepone reducer..', props.stepOneData);
  return (
    <div className='root' id='booking'>
      <Grid item xs={12}>
        <h4>Please select your preffered slot</h4>
      </Grid>
      {timing.map((item, i) => (
        <div key={i} className='time-selection' onClick={selectTime.bind(this, item)}>
          <span>{item.time}</span>
        </div>
      ))}
      <Grid item xs={12}>
        <Button id='bookAppointment' label='Book Appointment' onSubmit={submitBooking} />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stepOneData: state.stepOneReducer
  }
}

export default connect(
  mapStateToProps,
  { SubmitBooking }
)(stepTwo);
