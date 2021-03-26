import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './HabitCheckItem.css';


export const HabitCheckItem = ({checked, habitName, setHabit}) => {

      // const dosomething = () => {
      //     setHabit(!checked);
      //     // disable this checkbox
      //     // write code to call the backend to say the item is checked
      // }
      return (
        <div className= "checkItem">
            <input type="checkbox" checked={checked} name="checkItem" onChange={() => setHabit(!checked)}
            />
            <p className= "checkItemText">{habitName}</p>
        </div>
      );
}
  


// {!checked ? 
//   <input type="checkbox" checked={checked} name="checkItem" onChange={() => !checked ? dosomething : null}
//   /> : 
//   <input type="checkbox" disabled checked={checked} name="checkItem" onChange={() => !checked ? dosomething : null}
//   />
// }