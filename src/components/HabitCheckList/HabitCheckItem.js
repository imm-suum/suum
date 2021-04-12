import React, {useState} from 'react';
import './HabitCheckItem.scss';


export const HabitCheckItem = ({checked, habitName, setHabitState, playAnimation}) => {

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
