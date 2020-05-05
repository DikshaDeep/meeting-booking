
import React, { useState } from 'react';
import NotificationForm from './NotificationForm';
import ProgressIndicator from './progressIndicator';

const App = props => {
  const [notificationState, setNotificationState] = useState({
    title: '',
    subtitle: ''
  });

  const [loadingState, setLoadingState] = useState({
    isLoading: false
  });

  const _resetFields = () => {
    setNotificationState({
      title: '',
      subtitle: ''
    });
  }

  const _handleTitleChange = (e) => {
    setNotificationState({
      title: e.target.value,
      subtitle: notificationState.subtitle
    });
  }

  const _handleSubtitleChange = (e) => {
    setNotificationState({
      title: notificationState.title,
      subtitle: e.target.value
    });
  }

  const _handleSend = () => {
    setLoadingState({
      isLoading: true
    });

    var data = {
      app_id: "85ccd9b5-fdfd-4e9d-b4bc-de9cc267dce7",
      headings: { "en": notificationState.title },
      contents: { "en": notificationState.subtitle },
      included_segments: ["All", "Active Users"]
    };

    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic MDIwNTVlZjAtY2Q1Mi00ZjI2LTljODYtYTIyMWU0ZDA2NjI4"
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        _resetFields();
        setLoadingState({
          isLoading: false
        });
      });
    });

    req.on('error', function (e) {
      setLoadingState({
        isLoading: false
      });
    });

    req.write(JSON.stringify(data));
    req.end();
  }

  return loadingState.isLoading
    ? <ProgressIndicator />
    : <NotificationForm
      titleChange={_handleTitleChange}
      subtitleChange={_handleSubtitleChange}
      click={_handleSend}
    />
}

export default App;