
import { GOOGLE_API_KEY, CLIENT_ID } from "../config.js";

export const getEvents = (resource) => {
  const gapi = window['gapi'];
  function start() {
    gapi.client.init({
      'apiKey': GOOGLE_API_KEY,
      'clientId': CLIENT_ID,
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: "https://www.googleapis.com/auth/calendar"
    }).then(async function () {
      const googleAuth = gapi.auth2.getAuthInstance()
      const googleUser = await googleAuth.signIn();
      const token = googleUser.getAuthResponse().id_token;
      const request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': resource
      });
      request.execute(function (event) {
        alert('Event created Successfully');
        console.log("Event created: ", event.htmlLink);
      });
    })
  }
  gapi.load('client:auth2', start)
}

