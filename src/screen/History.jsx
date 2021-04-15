
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import '../app.css';
import {PastPlantWidget} from '../components/PastPlantWidget/PastPlantWidget';


//A Class that holds all components for Habit Nursery Screen

export const History = ()=> {
	let month;
	const [months, setMonths] = useState([]);
	let week;
	const [weeks, setWeeks] = useState([]);
	const [allOurDamnContent, setallOurDamnContent] = useState([]);

	//GET API response
	
	  //for (i=0; i< response.date.month.length; i++){
		  //for (j=0; j<response.date.month.week.length; j++) {
			  //weeklyresponse = return array of objects. Objects=array of habits.
			  //map the weekly response as <PastPlantWidget weekRange={} completedProgress={} />
		  //}
			//}


			// allContent = [
			// { <div>
			// 	<h2>{month}</h2>
			// 	<div>
			// 		<PastPlantWidget/>
			// 		<PastPlantWidget/>
			// 		<PastPlantWidget/>
			// 		<PastPlantWidget/>
			// 		<PastPlantWidget/>
			// 	</div>
			// </div> } ,
			// ]


	const historyScreenPadding = {
		paddingTop: "2rem",
		paddingLeft: '2rem',
	}

	// const plantWidgetContainer = {
	// 	display: "grid",
	// 	gridGap: "3rem",
	// 	scrollDirection:"smooth",
	// 	gridTemplateColumns: "repeat(5, calc(50% - 40px))",
	// gridTemplateRows: "minmax(150px, 1fr)",
	// 	overflowX:"scroll",
	// 	marginBottom:"3rem"
	// }

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
			
	return (

		//add imported classes here
		//always have div to place component notes
		  <div style={historyScreenPadding}>
			  <h1 style={pastPlantTitle}>Past Plants</h1>

			  <div className="allOurDamnContent">
					content goes in here
			  </div>
	</div>

	  );


}
