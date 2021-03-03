import React from 'react';
import './ListItem.css';



const ListItem = (props)=>{
    

    return (
        <div className="ListItem">
            <p className="list-item-label">{props.name}</p>
            <button className="button">

            </button>
            
        </div>
    )
}

export default ListItem;