import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import DateTimePicker from 'react-datetime-picker';
import Button from '../common/button';
import { SubmitBooking } from '../actions/stepAction';
import { getEvents } from '../api/calendarApi';

import './style.css';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function stepTwo(props) {
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = React.useState(new Date());

  const selectTime = (e) => {
    setSelectedTime(e);

  }

  

  const submitBooking = () => {
    const { stepOneData } = props.stepOneData;
    if (stepOneData) {
      var resource = {
        "summary": `Meeting in ${stepOneData.room}`,
        "start": {
          "dateTime": selectedTime,
          'timeZone': 'UTC+05:30'
        },
        "end": {
          "dateTime": selectedEndTime,
          'timeZone': 'UTC+05:30'
        },
        "description": stepOneData.description,
        "location": "IND",
        "attendees": [],
      };
      // makeApiCall(resource);
      getEvents(resource);
      alert('submit booking');
    } else {
      props.history.push('/')
    }

  }

  const classes = useStyles();
  return (
    <div className='root' id='booking'>
      <Grid item xs={12}>
        <h4>Please select your preffered slot</h4>
      </Grid>
      {/* <Grid item xs={12}>
        <CustomCalender id='date-picker' label='Select Your Date' handleDateChange={selectTime} selectedDate={selectedDate} />
      </Grid> */}
      <Grid item xs={12} className='datePicke'>
        <span>Start-Time: </span>
        <DateTimePicker
          id="start-time"
          amPmAriaLabel="Select AM/PM"
          calendarAriaLabel="Toggle calendar"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          hourAriaLabel="Hour"
          maxDetail="second"
          minuteAriaLabel="Minute"
          monthAriaLabel="Month"
          nativeInputAriaLabel="Date and time"
          onChange={selectTime}
          secondAriaLabel="Second"
          value={selectedTime}
          yearAriaLabel="Year"
        />
      </Grid>
      <Grid item xs={12} className='datePicke'>
      <span>End-Time: </span>
        <DateTimePicker
          id="start-time"
          amPmAriaLabel="Select AM/PM"
          calendarAriaLabel="Toggle calendar"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          hourAriaLabel="Hour"
          maxDetail="second"
          minuteAriaLabel="Minute"
          monthAriaLabel="Month"
          nativeInputAriaLabel="Date and time"
          onChange={(e) => setSelectedEndTime(e)}
          secondAriaLabel="Second"
          value={selectedEndTime}
          yearAriaLabel="Year"
        />
      </Grid>
      <Grid>
        <p>{props.stepOneData?.date}</p>
      </Grid>
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
