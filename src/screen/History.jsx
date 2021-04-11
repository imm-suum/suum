import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import DateTime from '../components/DateTime/DateTime.jsx';
import PastPlantWidget from '../components/PastPlantWidget/PastPlantWidget';


//A Class that holds all components for Habit Nursery Screen

class History extends Component {
	


  render() {
			
		const plantWidgetContainer = {
			paddingLeft: '2rem',

		}

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
				<DateTime date={new Date()} />
				
				<div style={plantWidgetContainer}>
					<PastPlantWidget/>
				</div>
      </div>

		);
  }

}

export default History;
