import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './HabitCheckItem.css';


export const HabitCheckItem = ({checked, habitName, setHabitState}) => {

      // const dosomething = () => {
      //     setHabit(!checked);
      //     // disable this checkbox
      //     // write code to call the backend to say the item is checked
      // }
      return (
        <div>
          {checked ? //ternary operator to display disabled checkitem or actionable one.

            //If true show disabled div here
            <div className= "checkItem">
              <input type="checkbox" disabled checked={checked} name="checkItem" onChange={() => setHabitState(!checked)}
              />
              <p className= "checkItemText">{habitName}</p>
            </div>

            ://OR

            //If false show disabled div here
            <div className= "checkItem">
              <input type="checkbox" checked={checked} name="checkItem" onChange={() => setHabitState(!checked)}
              />
              <p className= "checkItemText">{habitName}</p>
            </div>

          }
            
        </div>
      );
}
  


// {!checked ? 
//   <input type="checkbox" checked={checked} name="checkItem" onChange={() => !checked ? dosomething : null}
//   /> : 
//   <input type="checkbox" disabled checked={checked} name="checkItem" onChange={() => !checked ? dosomething : null}
//   />
// }


// <input type="checkbox" checked={checked} name="checkItem" onChange={() => setHabit(!checked)}
// />
// <p className= "checkItemText">{habitName}</p>