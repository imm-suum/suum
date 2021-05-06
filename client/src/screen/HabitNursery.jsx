import React, { useState, useEffect } from 'react';
import {HabitNurseryTag} from '../components/HabitNurseryTag/HabitNurseryTagcopy';
import '../scss/main.scss';
import axios from 'axios';


//A Class that holds all components for Habit Nursery Screen

export const HabitNursery = ()=>{


	const [stashedHabits, setStashHabits] = useState([]);
	const [loading, setLoading] = useState(true);
	let runIt = false;

	useEffect(() => {

		async function getStash() {

			// fetch data from a url endpoint
			const getMyStash = await axios.get(`https://suum-app.herokuapp.com/api/stash`)
				.then(response => {
					setStashHabits(response.data);
					setLoading(false);
				});

		}
		getStash();
	},[]);
	
	//console.log(stashedHabits);

	//put api response in an array so that the map function can call the crrect content for each tag
	const tagContent = ["walk the dog" , "meet spiderman", "smack thor","smack loki", "save the world", "oop"];
	
	const habitTagClick= ()=>{
		console.log("tag clicked");
	}

	
	console.log(stashedHabits);
	console.log(stashedHabits.length > 0);
	
	return(

		<div>
			<div>
			<h1 style={{padding:"2rem"}}>Habit Nursery</h1>
			</div>

			<div style={{padding:"2rem"}} className="habitStashContainer">
				<h2 style={{fontSize:"1rem", marginBottom:"1rem"}}>Tap a Habit to add it to Today's List!</h2>
				
					{stashedHabits.length > 0 ? 
					
					stashedHabits.map((item, idx)=> {
						return <HabitNurseryTag key={idx} habitTagClick={habitTagClick} text={stashedHabits[idx].habitName}/>
					})
					:
					
					<p>You dont have any Stashed Items yet</p>
				
					}

				
			</div>

		</div>

	);
}