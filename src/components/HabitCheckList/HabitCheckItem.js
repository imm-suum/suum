import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './HabitCheckItem.css';

// var testHabits = [{habit:"test habit"},{habit:"test habit2"}, {habit:"test habit2"}];

export const HabitCheckItem = ({habitName}) => {

  const [isChecked, setCheckedState ] = useState(false);
  
  const onChangeValue = (event) => {
    //this method captures the event of the checkitem being checked and logs the value at the time it was checked and then makes react state to the the current status of the input. 
    console.log(event.target.checked);

    //update component state to what the input is right now. 
    setCheckedState(event.target.checked);
    
  }

      return (
        <div className= "checkItem">
          <input type="checkbox" checked={isChecked} name="checkItem" onChange={onChangeValue}/> 
            <p className= "checkItemText">{habitName}</p>
        </div>
      );
}
  