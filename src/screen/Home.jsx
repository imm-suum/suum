import React, { useEffect, useState, createRef } from 'react';
import '../app.css';
import axios from 'axios';
import lottie from 'lottie-web';
import plantAnimation from '../assets/plant3.json';
import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';
import DateTime from '../components/DateTime/DateTime.jsx';


//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

 ///habitTab1 is checked && dispalay component
  //



export const Home =  () => {

    // get API response.

	const [todayHabits, setHabits] = useState([]);

	useEffect(() => {
		//apiCall();
	});

	async function apiCall() {
		try {
			const jwttoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjYTk4YTM1ZTEwNDJhY2FmNWJlOTIiLCJpYXQiOjE2MTgxNzE4NzR9.hFvosUE591FjGcIdi49Q8OWHPbZJYVID8nytjfAJ9Nk";
			// fetch data from a url endpoint
			const data = await axios.get("http://localhost:5000/api/habit",{headers:{'auth-token':jwttoken}})
			.then(res=>{
				setHabits(res.data);
			});
			//setHabits(data.json());
			//const items = await data.json();
				//console.log(res);

			return data;
		} catch(error) {
			console.log("error", error);
			// appropriately handle the error
		}
	}

	let plantAnimationDiv = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: plantAnimationDiv.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: plantAnimation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);




    // let response = APIresonseArray
	const dateTimePadding = {
		paddingLeft: '2rem',
		paddingTop: '2rem'
	}

	  return (
      //if night time show checkin process.
      //IF (Date.prototype.getHours() > 20 && Date!= "friday" ) {
      // show checkinModal => Planning Modal
      // }else if (Date.prototype.getHours() > 20 && Date(day) === "friday") {
      //     //show weeklyReviewCard componentONly.
      //     //on close... load homescreen with habitTabWidget?????
      // }else{
          //if it's before 8pm on whatever day
          //show habitTabWidget
      //}

		  //add imported classes here
		  //always have div to place component notes

			<div>
        <div style={dateTimePadding}>
          <DateTime date={new Date()} />
        </div>
		  	<HabitTabWidget todayHabits={todayHabits}/>

				<div className="plantAnimationDiv" ref={plantAnimationDiv} />

      </div>
		);
}
