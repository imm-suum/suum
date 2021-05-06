import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';


  ReactDOM.render(
    <React.StrictMode>
<div id="phoneWrapper">
      {/* <App /> */}
      <iframe id="iframes" src="https://suum-app-iframe.herokuapp.com/" style={{width:"100%",height:"100%"}} />
</div>
    </React.StrictMode>,
    document.getElementById('root')
  );

