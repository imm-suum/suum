import React, { useEffect, useState, createRef } from 'react';
import '../app.css';
import '../scss/main.scss';
import axios from 'axios';
import Lottie from 'react-lottie';
import plantAnimation from '../assets/plant3.json';
import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';
import DateTime from '../components/DateTime/DateTime.jsx';
import CheckInModal from '../components/checkInModal/checkinModal';
import { WeeklyReviewCard } from '../components/WeeklyReviewCard/WeeklyReviewCard.js';
import { PlanningModal } from '../components/PlanningModal/PlanningModal.js';

//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

///habitTab1 is checked && dispalay component
//



export const Home = () => {
	const currentTime = new Date();
	// get API response.

	const [isStopped, setIsStopped] = useState(true);
	const [isComplete, setIsComplete] = useState(false);
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
	}, []);

	const completeFunction = ()=> {
		setIsStopped(true);
		console.log(isStopped);
	}

	const startPoint = {
		value:0,
		isFrame:true
	}

	const sequence = {
		segments: [0,189],
		forceFlag:true
	}

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: plantAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}	

	};

	let playAnimation = () => {
		setIsStopped(!isStopped)
		console.log(isStopped)
	}

	const dateTimePadding = {
		paddingLeft: '2rem',
		paddingTop: '2rem'
	}

	//tracking the modals below
	let checkInTime = false;
	let weeklyTime = false;


	if (currentTime.getHours() > 20 && currentTime.getDay() != 0) {
		//if night time show checkin process. 20(8pm) && not 0( everyday but sunday)
		checkInTime = true;

	} else if (currentTime.getHours() < 9 && currentTime.getDay() === 0) {
		//if Sunday Night to show weekly report. 9(9am) && 0 (sunday)
		weeklyTime = true;
	}


	return (
		<div>

			{checkInTime ? <CheckInModal  todayHabits={todayHabits}/> : null}
			{weeklyTime ? <WeeklyReviewCard /> : null}

			<div style={dateTimePadding}>
				<DateTime date={new Date()} />
			</div>

			<button onClick={()=> setIsStopped(!isStopped)}>Play</button>

			{(todayHabits.length && todayTip.length ) ? <HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation} tipOfDay={todayTip} /> : <PlanningModal />}
			<div className="plantDiv">
			<Lottie 
				options={defaultOptions}
				isStopped={isStopped}
				width={"100%"}
				height={"auto"}
				goToAndPlay={startPoint}
			/>
		</div>
		</div>
	);


}
