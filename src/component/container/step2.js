import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { connect } from "react-redux";
import Button from '../common/button';
import { SubmitBooking } from '../actions/stepAction';
import { makeApiCall } from '../api/calendarApi';
import { timing } from '../mock/constant';
import './style.css';
import { GOOGLE_API_KEY, CALENDAR_ID, CLIENT_ID } from "../config.js";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function stepTwo(props) {
  const [selectedTime, setSelectedTime] = React.useState(moment().format('hh:mm'));
  const [selectedEndTime, setSelectedEndTime] = React.useState('');
  
  const selectTime = (e) => {
    if (e.target.id === 'start-time') {
      setSelectedTime(e.target.value);
      props.SubmitBooking({startTime: e.target.value});
    }
    if (e.target.id === 'end-time') {
      setSelectedEndTime(e.target.value);
      props.SubmitBooking({endtTime: moment(e.target.value).format('hh:mm')});
    }
    
  }

  const submitBooking = () => {
    const {stepOneData}= props.stepOneData;
   if (stepOneData) {
    var resource = { 
      "summary":`Meeting in ${stepOneData.description}`,
      "start": {
        "dateTime": `${moment(stepOneData.date).format('MM/DD/YYYY')} ${selectedTime}`
      },
      "end": {
        "dateTime": `${moment(stepOneData.date).format('MM/DD/YYYY')} ${selectedEndTime}`
      },
      "description": stepOneData.description,
      "location": "IND",
      "attendees": [],
    };
    makeApiCall(resource);
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
     
      <Grid item xs={12}>
        <TextField
          id="start-time"
          label="Start Time"
          type="time"
          onChange={selectTime}
          defaultValue={selectedTime}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800, // 5 min
          }}
        /></Grid>
        <Grid item xs={12}>
        <TextField
          id="end-time"
          label="End Time"
          type="time"
          onChange={selectTime}
          defaultValue={selectedEndTime}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800, // 5 min
          }}
        /></Grid>
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
