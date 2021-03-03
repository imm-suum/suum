import React from 'react';
import './ListItem.css';



const ListItem = (props)=>{
    
    function sayHello() {
        console.log("HELLO!")
    }

    return (
        <div className="ListItem">
            <p className="list-item-label">{props.name}</p>
            <button className="button" onClick={sayHello}>

            </button>
            
        </div>
    )
}

export default ListItem;