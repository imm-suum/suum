import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import {PlanningModal} from '../components/PlanningModal/PlanningModal.js';


//A Class that holds all components for Habit Nursery Screen

class Stash extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<p>stash screen</p>
				<PlanningModal/>

            </div>

		);
  }

}

export default Stash;
