import React, { useState } from 'react';
import Button from '../Button/Button';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';
import './Modal.scss';

export const Modal = ({toggleModal, closeModal}) => {

  //style object to apply on button
  const btnBottom = {
    position: 'absolute',
    bottom: '22px',
    width: "80%"
  }

  //click event 
  const handleClick = ()=> {
    return (
      console.log("clicked button")
    )
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
    return <div className="margin-y black"><HabitCheckItem key={idx} checked={habit.checked} habitName={habit.name} setHabitState={habit.setting}/></div>
    
  })
  
  return ( 
    <aside id="modalbackdrop" className="modalWrapper" onClick={e=> closeModal(e)}>
      <div className="modalInner">
        <div className="modalContent">
        {/* <span className="close" id="closer" onClick={toggleModal}>X</span> */}
        <h2 style={{color:"white", fontSize:"24px", marginBottom:"30px"}} className="extrabold center-text">How did you do today?</h2>
      
        {modalContent}
        {/* <p className="center-text">Check the habits you've completed today!</p> */}
        <div style={btnBottom}>
          <Button color="yellow" size={"lg"} handleClick={handleClick}>
            Let's Plan for Tomorrow!
          </Button>
        </div>
        </div>

      </div>

    </aside>
   )
}
