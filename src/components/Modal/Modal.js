import React, { useState } from 'react';
import Button from '../Button/Button';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';
import './Modal.scss';

export const Modal = ({toggleModal, closeModal}) => {

  const btnBottom = {
    position: 'absolute',
    bottom: '-100px'
  }
  
  //Track state for each of the 3 Habit Check Items that are used 
  const [ habit1IsChecked, setHabit1 ] = useState(false);
  const [ habit2IsChecked, setHabit2 ] = useState(false);
  const [ habit3IsChecked, setHabit3 ] = useState(false);


  //array of information 
  const habits = [
    {checked:habit1IsChecked , name:"i don't love this for me" , setting: setHabit1},
    {checked:habit2IsChecked , name:"OOP" , setting: setHabit2},
    {checked:habit3IsChecked , name:"avocado" , setting: setHabit3}
  ];

  const modalContent = habits.map((habit, idx) => {
    return <div className="margin-y"><HabitCheckItem key={idx} checked={habit.checked} habitName={habit.name} setHabitState={habit.setting}/></div>
  })
  
  return ( 
    <div className="modalWrapper">
      <div className="modalInner">
        <span id="closer" onClick={closeModal}>X</span>
        <h2 className="extrabold center-text">How did you do today?</h2>
        <p className="center-text">Check the habits you've completed today!</p>
      </div>
      {modalContent}
      
      <Button style={btnBottom} color="yellow" size={"lg"}>
        Let's Plan for Tomorrow!
      </Button>
    </div>
   )
}
