import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import OnBoardingScreens from '../components/OnBoardingScreens/OnBoardingScreens.js';
import PastPlantWidget from '../components/PastPlantWidget/PastPlantWidget';


//A Class that holds all components for Habit Nursery Screen

class History extends Component {

  render() {
		//GET API response 

		//for (i=0; i< response.date.month.length; i++){
			//for (j=0; j<response.date.month.week.length; j++) {
				//weeklyresponse = return array of objects. Objects=array of habits.
				//map the weekly response as <PastPlantWidget weekRange={} completedProgress={} />
			//}
		//}


	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>
				<h1>Past Plants</h1>
				<PastPlantWidget/>
				
      </div>

		);
  }

}

export default History;
