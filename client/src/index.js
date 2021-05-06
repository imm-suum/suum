import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import iPhoneXFrame from './assets/iPhoneXFrame.png'
import App from './app.js';


ReactDOM.render(
  <React.StrictMode>
    <div id="phoneWrapper">
      {/* <App /> */}
      <iframe id="iframes" src="https://suum-app-iframe.herokuapp.com/" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

