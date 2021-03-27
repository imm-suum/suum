import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';


import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';

import NoHabitsWidget from '../components/NoHabitsWidget/NoHabitsWidget.js';


//A Class that holds all components for Habit Nursery Screen

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


