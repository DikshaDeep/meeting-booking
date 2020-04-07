var clientId = '481116609540-su2mqhipkagb42eqk45fqoojt7b2pv2b.apps.googleusercontent.com';
var apiKey = 'AIzaSyCPoxQ6sTBSBrTxPLNNalSo0lC4innD_gc';

var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
}

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

export function makeApiCall(resource) {
  gapi.client.load('calendar', 'v3', function () { // load the calendar api (version 3)
    var request = gapi.client.calendar.events.insert
      ({
        'calendarId': '24tn4fht2tr6m86efdiqqlsedk@group.calendar.google.com',
        // calendar ID which id of Google Calendar where you are creating events. this can be copied from your Google Calendar user view.

        "resource": resource 	// above resource will be passed here
      });
  });
}

