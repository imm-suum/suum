import React, {useEffect, useState} from 'react';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';
import { NoHabitsWidget } from '../NoHabitsWidget/NoHabitsWidget.js';
import axios from 'axios';
import { Tabs } from './Tabs';
import './HabitTabWidget.scss';



export const HabitTabWidget = ({todayHabits, playAnimation, tipOfDay}) => {

  //Track state for the Habit Tab Widget component to know what tab has been clicked so far
  const [activeTab, setActiveTab] = useState('tab1');
  //Create 3 Tabs by my naming them in this array
  const tabs = ["tab1","tab2", "tab3", "tab4"]

  //console.log(todayHabits);
 
  // console.log(tipOfDay);
  //Track state for each of the 3 Habit Check Items that are used
  const [ habit1IsChecked, setHabit1 ] = useState(false);
  const [ habit2IsChecked, setHabit2 ] = useState(false);
  const [ habit3IsChecked, setHabit3 ] = useState(false);

  //console.log(todayHabits[2].habitName);

  useEffect(() =>{
    //console.log(todayHabits.todayHabits[0]);
    // async function getHabits() {
		// 	// fetch data from a url endpoint
		// 	const getHabit = await axios.get('/api/habit');
				
    //   console.log(getHabit, getHabit.data);
    //   setReturnedHabits(getHabit.data);
        
    // }

    // getHabits();

  }, []);

  //improve statemanagement to have habitIsChecked to be an array of [true, false, true] for each tab
 console.log(playAnimation);
 
  const content = {
    tab1: <HabitCheckItem playAnimation={playAnimation} setHabitState={setHabit1} checked={habit1IsChecked} habitName= {todayHabits[0].habitName}/>,
    tab2: <HabitCheckItem playAnimation={playAnimation} setHabitState={setHabit2} checked={habit2IsChecked} habitName= {todayHabits[1].habitName}/>,
    tab3: <HabitCheckItem playAnimation={playAnimation} setHabitState={setHabit3} checked={habit3IsChecked} habitName= {todayHabits[2].habitName}/>,

    tab4: <NoHabitsWidget/>
  }

  //When tab is clicked this function sets the state of the active tab on the HabitTabWidget to the selected tab
  const onTabClickHandler = (tab) => {
    setActiveTab(tab);
  }
  //This function is called anytime there is a change in the activeTab. It gets the appropriate content form the content object for the active tab
  const displayContent = (tab) => {
    return content[tab];
  }

  //console.log({todayHabits});

  return (
     <div>
          {
            tabs.map((tab, idx)=> {
			  return <Tabs key={idx} onClickHandler={onTabClickHandler} tab={tab} />
			})

          }
        <div className='HabitTabWidget bg-green marginTop'>{displayContent(activeTab)}</div>

     </div>
  );
}
