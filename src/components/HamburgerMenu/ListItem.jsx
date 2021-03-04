import React from 'react';
import './ListItem.css';



const ListItem = (props)=>{
    
    function sayHello () {
        console.log("HELLO");
    }

    return (
        <div className="ListItem">
            <p className="list-item-label">{props.name}</p>
            <a className="button" href={`${props.link}`} target="_blank" onClick={sayHello}></a>
            
        </div>
    )
}

export default ListItem;