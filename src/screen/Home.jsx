import React, { useEffect, useState, createRef } from 'react';
import '../app.css';
import '../scss/main.scss';
import axios from 'axios';
import lottie from 'lottie-web';
import plantAnimation from '../assets/plant3.json';
import { HabitTabWidget } from '../components/HabitTabWidget/HabitTabWidget.js';
import DateTime from '../components/DateTime/DateTime.jsx';
import CheckInModal from '../components/checkInModal/checkinModal';


//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

 ///habitTab1 is checked && dispalay component
  //



export const Home =  () => {
	let anim;
	const currentTime = new Date().getHours();
    // get API response.

	const [todayHabits, setHabits] = useState([]);

	useEffect(() => {
		//apiCall();
	});

	async function apiCall() {
		try {
			
			// fetch data from a url endpoint
			const data = await axios.get(`/api/habit`)
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
    anim = lottie.loadAnimation({
      container: plantAnimationDiv.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: plantAnimation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);


	const playAnimation = ()=>{
		anim.playSegments([0,165], true);
		//loopAnimation();
		console.log("playing")
	}

	const loopAnimation = ()=>{
		anim.playSegments([139,165], false);
	}

	const dateTimePadding = {
		paddingLeft: '2rem',
		paddingTop: '2rem'
	}
	
	//if night time show checkin process.
	if (currentTime > 20) {
	// show checkinModal => Planning Modal
	// }else if (Date.prototype.getHours() > 20 && Date(day) === "friday") {
	//     //show weeklyReviewCard componentONly.
	//     //on close... load homescreen with habitTabWidget?????
		return (
			<CheckInModal/>
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
		  	<HabitTabWidget todayHabits={todayHabits} playAnimation={playAnimation}/>
				<div className="plantAnimationDiv" ref={plantAnimationDiv} />

      </div>
		);
	}
}
