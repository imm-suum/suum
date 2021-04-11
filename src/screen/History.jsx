import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import DateTime from '../components/DateTime/DateTime';
import OnBoardingScreens from '../components/OnBoardingScreens/OnBoardingScreens.js';


//A Class that holds all components for Habit Nursery Screen

class History extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<DateTime/>

				<OnBoardingScreens/>
            </div>

		);
  }

}

export default History;
