import React from 'react';
import './Burger.css';



const Burger = (props)=>{

    return (
        <button className="burger-toggle">
            <div className="burger-toggle-line" />
            <div className="burger-toggle-line" />
            <div className="burger-toggle-line" />
        </button>
    )
}

export default Burger;