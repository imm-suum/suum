import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';



//A Class that holds all components for WeeklyReport Screen

function WeeklyReport() {

    useEffect(()=>{

        fetchItems();

    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');


        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (

        //add imported classes here
        //always have div to place component notes
        <div>
            <h1>Weekly Report screen</h1>
            {items.map(item => (
                <p key= {item.id} >{item.name}</p>
            ))}

        </div>

    );


}

export default WeeklyReport;
