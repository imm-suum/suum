import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.js';


  ReactDOM.render(
    <React.StrictMode>
<div id="phoneWrapper">
    <div id="iframes" >
      <App />
      {/* <iframe id="iframes" src="https://suum-app.herokuapp.com/" style={{width:"100%",height:"100%"}} /> */}
      </div>
</div>
    </React.StrictMode>,
    document.getElementById('root')
  );

