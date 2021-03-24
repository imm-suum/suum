import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';


import HabitCheckItem from '../components/HabitCheckList/HabitCheckItem.js';


//A Class that holds all components for Habit Nursery Screen

class HabitNursery extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<HabitCheckItem/>
            

            </div>

		);
  }

}

export default HabitNursery;
