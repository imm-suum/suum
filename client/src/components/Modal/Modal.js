import React, { useState } from 'react';
import Button from '../Button/Button';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';
import './Modal.scss';
import { PlanningModal } from '../PlanningModal/PlanningModal.js';
import axios from 'axios';

export const Modal = ({toggleModal, closeModal, todayHabits}) => {

  //style object to apply on button
  const btnBottom = {
    position: 'absolute',
    bottom: '22px',
    width: "80%"
  }

	const [togglePlanningModal, settogglePlanningModal] = useState(false);


  //click event
  // replace with event to trigger chang in mondalContent div
  const handleClick = ()=> {
    return (
		<div>
	  		<PlanningModal />
	  	</div>
    )
  };



  //Track state for each of the 3 Habit Check Items that are used
  //API call
  // response = [{habit1}, {habit2}, {habit3}]
  console.log(todayHabits, "todayHabits");

  const [ habit1IsChecked, setHabit1 ] = useState();
  const [ habit2IsChecked, setHabit2 ] = useState();
  const [ habit3IsChecked, setHabit3 ] = useState();

  //array of information
  //ex: name: {response[i].habitName}
  const habits = [
    {checked:todayHabits[0].habitComplete , name:todayHabits[0].habitName  , setting: setHabit1},
    {checked:todayHabits[1].habitComplete , name:todayHabits[1].habitName  , setting: setHabit2},
    {checked:todayHabits[2].habitComplete , name:todayHabits[2].habitName  , setting: setHabit3}
  ];

  const modalContent = habits.map((habit, idx) => {
    return <div className="margin-y black"><HabitCheckItem key={idx} checked={habit.checked} habitName={habit.name} setHabitState={habit.setting}/></div>

  })

  async function sendHabits(d) {
    // Send habit id to complete the habit;
    console.log(d, "sendHabits Called in check in modal ");
      const completetHabit = await axios.patch(`/api/habit/complete`, d)
      .then(res=>{
        console.log(res);
      });  
  }

  { habit1IsChecked ? sendHabits({"_id": todayHabits[0]._id}) : console.log("not update item 1") };
  { habit2IsChecked ? sendHabits({"_id": todayHabits[1]._id}) : console.log("not update item 2") };
  { habit3IsChecked ? sendHabits({"_id": todayHabits[2]._id}) : console.log("not update item 3") };

  return (
    <aside id="modalbackdrop" className="modalWrapper" onClick={e=> closeModal(e)}>
      <div className="modalInner">
        <div className="modalContent">
        <h2 style={{color:"white", fontSize:"24px", marginBottom:"30px"}} className="extrabold center-text">How did you do today?</h2>

        {modalContent}

        <div style={btnBottom}>
          {/* handleCLick triggers event to replace content in modalContent div with Form.js */}
          <Button id="modalClose" color="yellow" size={"lg"} handleClick={handleClick}>
            Let's Plan for Tomorrow!
          </Button>
        </div>
        </div>

      </div>

    </aside>
   )
}
