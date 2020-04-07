
import { GOOGLE_API_KEY, CALENDAR_ID, CLIENT_ID } from "../config.js";

var scopes = 'https://www.googleapis.com/auth/calendar';

// function handleClientLoad() {
//   gapi.client.setApiKey(GOOGLE_API_KEY);
//   window.setTimeout(checkAuth, 1);
// }

// function checkAuth() {
//   gapi.auth.authorize({ client_id: CLIENT_ID, scope: scopes, immediate: true }, handleAuthResult);
// }

// var resource = {
//   "summary": "My Event",
//   "start": {
//     "dateTime": today
//   },
//   "end": {
//     "dateTime": twoHoursLater
//   },
//   "description": "We are organizing events",
//   "location": "US",
//   "attendees": [
//     {
//       "email": "attendee1@gmail.com",
//       "displayName": "Jhon",
//       "organizer": true,
//       "self": false,
//       "resource": false,
//       "optional": false,
//       "responseStatus": "needsAction",
//       "comment": "This is my demo event",
//       "additionalGuests": 3

//     }
//   ],
// };

var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    { 'email': 'lpage@example.com' },
    { 'email': 'sbrin@example.com' }
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      { 'method': 'email', 'minutes': 24 * 60 },
      { 'method': 'popup', 'minutes': 10 }
    ]
  }
};

const gapi = window['gapi'];
function start() {
  console.log('event', event)
  gapi.client.init({
    'apiKey': GOOGLE_API_KEY,
    'clientId': CLIENT_ID,
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
    scope: "https://www.googleapis.com/auth/calendar.events"
  }).then(function () {
    const request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
    request.execute(function (event) {
      console.log('inside request execution', event)
      console.log("Event created: ", event.htmlLink);
    });
  })
}


export function makeApiCall(resource) {
  gapi.load('client:auth2', start);
  event = resource;
  // const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`;
  // fetch(url, {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json, text/plain, */*',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     'calendarId': 'primary',
  //     resource: event
  //   })
  // }).then(res => res.json())
  //   .then(res => console.log(res));
  // var request = gapi.client.calendar.events.insert({
  //   'calendarId': CALENDAR_ID,
  //   'resource': event
  // });

  // request.execute(function(event) {
  //   appendPre('Event created: ' + event.htmlLink);
  // });
}

