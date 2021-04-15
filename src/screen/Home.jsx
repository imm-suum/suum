import React, { useEffect, useState, createRef } from 'react';
import '../app.css';
import '../scss/main.scss';
import axios from 'axios';
import lottie from 'lottie-web';
import plantAnimation from '../assets/plant3.json';
import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';
import DateTime from '../components/DateTime/DateTime.jsx';
import CheckInModal from '../components/checkInModal/checkinModal';
import {WeeklyReviewCard} from '../components/WeeklyReviewCard/WeeklyReviewCard.js';

//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

///habitTab1 is checked && dispalay component
//



export const Home = () => {
	let anim;

	const currentTime = new Date();
    // get API response.


	const [todayHabits, setHabits] = useState([]);
	const [todayTip, setTodayTip] = useState([]);

	useEffect(() => {

		async function getHabits() {

			// fetch data from a url endpoint
			const getHabit = await axios.get('/api/habit')
				.then(response => {
					setHabits(response.data);
				});
			const getTipofDay = await axios.get('/api/tips')
				.then(response => {
					setTodayTip(response.data);
				});

		}
		getHabits();

		anim = lottie.loadAnimation({
			container: plantAnimationDiv.current,
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: plantAnimation
		});
		return () => anim.destroy(); // optional clean up for unmounting
	}, []);

	// async function apiCall() {
	// 	try {

	// 		// fetch data from a url endpoint
	// 		const data = await axios.get(`/api/habit`, {headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'}})
	// 		.then(res=>{
	// 			setHabits(res.data);
	// 			//console.log(todayHabits);
	// 		});
	// 		return data;
	// 	} catch(error) {
	// 		console.log("error", error);
	// 		// appropriately handle the error
	// 	}
	// }

	console.log(todayHabits);
	//console.log(todayTip);
	let plantAnimationDiv = createRef();




	const playAnimation = () => {
		anim.playSegments([0, 165], true);
		//loopAnimation();
		console.log("playing")
	}

	const loopAnimation = () => {
		anim.playSegments([139, 165], false);
	}

	const dateTimePadding = {
		paddingLeft: '2rem',
		paddingTop: '2rem'
	}

	console.log(currentTime.getDay());

	//if night time show checkin process.
	if (currentTime.getHours() >= 20 && currentTime.getDay() != 0) {
	// show checkinModal => Planning Modal
	//     //show weeklyReviewCard componentONly.
	//     //on close... load homescreen with habitTabWidget?????
		return (
			<div>
			<CheckInModal/>
        <div style={dateTimePadding}>
          <DateTime date={new Date()} />
        </div>
		  	{todayHabits.length >= 0 && <HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation} tipOfDay={todayTip} />}
				<div className="plantAnimationDiv" ref={plantAnimationDiv} />
			</div>
		)

	}else if (currentTime.getHours() >= 20 && currentTime.getDay() === 3) {
		return (
			<div>
			<WeeklyReviewCard/>
		<div style={dateTimePadding}>
		  <DateTime date={new Date()} />
		</div>
			{todayHabits.length >= 0 && <HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation} tipOfDay={todayTip} />}
				<div className="plantAnimationDiv" ref={plantAnimationDiv} />
			</div>
		)

	}else{
			//if it's before 8pm on whatever day
			//show habitTabWidget
			return (

				//add imported classes here
				//always have div to place component notes

				<div>
        <div style={dateTimePadding}>
          <DateTime date={new Date()} />
        </div>
		  	
        {todayHabits.length >= 0 && <HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation} tipOfDay={todayTip} />}
				<div className="plantAnimationDiv" ref={plantAnimationDiv} />

      </div>
		);
	}

}
