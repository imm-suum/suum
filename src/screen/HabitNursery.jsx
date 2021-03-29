import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';


import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';

import NoHabitsWidget from '../components/NoHabitsWidget/NoHabitsWidget.js';


//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits. 
//make all components dark mode as well. 

export const HabitNursery =  () => {

	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<HabitTabWidget/>
				<NoHabitsWidget/>
            

            </div>

		);


}


