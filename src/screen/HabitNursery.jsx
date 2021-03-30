import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';


import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';

import NoHabitsWidget from '../components/NoHabitsWidget/NoHabitsWidget.js';

import DateTime from '../components/DateTime/DateTime.jsx';



//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits. 
//make all components dark mode as well. 

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

export const HabitNursery =  () => {

	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>
        <DateTime date={new Date()} />,
				<HabitTabWidget/>
				<NoHabitsWidget/>
            

            </div>

		);


}


