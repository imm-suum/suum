import React from 'react';
import './Burger.scss';


const Burger = props => {

    return (

        <button onClick={props.click} className="flexbox burger-toggle">
            {/* the three lines to rep icon */}
            <div className="burger-toggle-line" />
            <div className="burger-toggle-line" />
            <div className="burger-toggle-line" />
        </button>
    )
}

 
export default Burger; 