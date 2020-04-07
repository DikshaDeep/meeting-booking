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
  const now = new Date(Date.now() + (30 * 60 * 1000));

  const selectTime = (time) => {
    setSelectedTime(time.target.value);
    props.SubmitBooking({time: time.target.value});
  }
  const submitBooking = () => {
    const stepOneData = props.stepOneData;
    console.log('stepOneDat', stepOneData)
    var resource = {
      "summary": "My Event",
      "start": {
        "dateTime": selectedTime
      },
      "end": {
        "dateTime": selectedEndTime
      },
      "description": stepOneData.description,
      "location": "US",
      "attendees": [
        {
          "email": "diksha.deep@gmail.com",
          "displayName": "Jhon",
          "organizer": true,
          "self": false,
          "resource": false,
          "optional": false,
          "responseStatus": "needsAction",
          "comment": "This is my demo event",
          "additionalGuests": 3

        }
      ],
    };
    makeApiCall(resource);
    alert('submit booking');
  }
  
  const classes = useStyles();
  return (
    <div className='root' id='booking'>
      <Grid item xs={12}>
        <h4>Please select your preffered slot</h4>
      </Grid>
     
      <Grid item xs={12}>
        <TextField
          id="time"
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
          id="time"
          label="End Time"
          type="time"
          onChange={(e) => setSelectedEndTime(moment(e.target.value).format('hh:mm'))}
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
