import React, {useEffect, useState} from 'react';
import HabitTabWidget from './HabitTabWidget.jsx';
import './HabitTabWidget.scss';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';

import { NewHabitTabWidget } from './newHabitTabWidget';
//need habitcheckItem for content render.


export const Tab = () => {
  const [activeTab, setActiveTab ] = useState('tab1');
  const [ habit1IsChecked, setHabit1 ] = useState(false);
  const [ habit2IsChecked, setHabit2 ] = useState(true);
  const [ habit3IsChecked, setHabit3 ] = useState(false);
  
  const tabs = ["tab1", "tab2", "tab3"]


  const content = {
    tab1: <HabitCheckItem setHabit={setHabit1} checked={habit1IsChecked} habitName= "habit 1 name"/>,
    tab2: <HabitCheckItem setHabit={setHabit2} checked={habit2IsChecked} habitName= "habit 2 name"/>,
    tab3: <HabitCheckItem setHabit={setHabit3} checked={habit3IsChecked} habitName= "habit 3 name"/>
  }
  
  const onTabClickHandler = (tab) => {
    setActiveTab(tab);
  }
  const displayContent = (tab) => {
    return content[tab];
  }

  ///habitTab1 is checked && dispalay component
  //

  // async function asyncFunc() {
  //   try {
  //     // fetch data from a url endpoint
  //     const data = await axios.get("/some_url_endpoint");
  //     return data;
  //   } catch(error) {
  //     console.log("error", error);
  //     // appropriately handle the error
  //   }
  // }

  // useEffect(() => {
  //   asyncFunc();
  // [asyncFunc]});


  return (
    //needs this div to house the component to show on screen.
     <div> 
        <h1>HI WE'RE TESTING THE HabitTabWidget</h1>
        <div>
          {
            tabs.map((tab, idx)=> {
              return <NewHabitTabWidget key={idx} onClickHandler={onTabClickHandler} tab={tab} />
            })
          }
        <div className='HabitTabWidget bg-green'>{displayContent(activeTab)}</div>
        </div>
     </div> 
  );  
} 
