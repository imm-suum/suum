//reusable Button UI component
//can display different sizes and colors based on Button.css
import React, { useState } from "react";
import './Button.scss';


function Button(props) {

  const [size] = useState(props.size);
  const [color] = useState(props.color);

  return (
    //class names are passed in as variables so we can reuse the component to accept any css styling
    //set onClick to event in App.js
    <button id={props.id} className={`btn-${color} btn-${size}`} onClick={props.handleClick}>{props.children}</button>
  );
}
export default Button;
