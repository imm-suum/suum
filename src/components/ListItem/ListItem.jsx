import React from 'react';
import './ListItem.scss';



const ListItem = (props)=>{

    function sayHello () {
        console.log("HELLO");
    }

    return (
        <div className="ListItem" onClick={sayHello}>
            <p className="list-item-label">{props.name}</p>
            <a href={`${props.link}`} className="button"></a>
        </div>
    )
}

export default ListItem;
