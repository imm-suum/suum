
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import DateTime from '../components/DateTime/DateTime.jsx';
import PastPlantWidget from '../components/PastPlantWidget/PastPlantWidget';


//A Class that holds all components for Habit Nursery Screen

class History extends Component {



render() {

	  const historyScreenPadding = {
		  paddingTop: "2rem",
		  paddingLeft: '2rem',
	  }

	  const plantWidgetContainer = {
		  display: "grid",
		  gridGap: "3rem",
		  scrollDirection:"smooth",
		  gridTemplateColumns: "repeat(5, calc(50% - 40px))",
	  gridTemplateRows: "minmax(150px, 1fr)",
		  overflowX:"scroll",
		  marginBottom:"3rem"
	  }

	  const pastPlantTitle={
		  fontSize: "24px",
		  fontWeight: "600",
		  color: "#323232",
		  marginBottom: "4rem"
	  }


	  const monthTitle = {
		  fontSize: "18px",
		  fontWeight: "400",
		  color: "#323232",
		  marginBottom: ".5rem"
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
		  <div style={historyScreenPadding}>
			  <h1 style={pastPlantTitle}>Past Plants</h1>

			  <h2 style={monthTitle}>January 2021</h2>
			  <div style={plantWidgetContainer}>
				  {/* where we will map the plast plant widget */}
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
			  </div>

			  <h2 style={monthTitle}>February 2021</h2>
			  <div style={plantWidgetContainer}>
				  {/* where we will map the plast plant widget */}
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
				  <PastPlantWidget/>
			  </div>
	</div>

	  );
}

}

export default History;
