import React, { useState, useEffect } from 'react';
import {HabitNurseryTag} from '../components/HabitNurseryTag/HabitNurseryTagcopy';
import '../scss/main.scss';


//A Class that holds all components for Habit Nursery Screen

export const HabitNursery = ()=>{
	

	//put api response in an array so that the map function can call the crrect content for each tag
	const tagContent = ["walk the dog" , "meet spiderman", "smack thor","smack loki", "save the world", "oop"];
	
	const habitTagClick= ()=>{
		console.log("tag clicked");
	}
	
	
	return(

		<div>
			<div>
			<h1 style={{padding:"2rem"}}>Habit Nursery</h1>
			</div>

			<div style={{padding:"2rem"}} className="habitStashContainer">
				<h2 style={{fontSize:"1rem", marginBottom:"1rem"}}>Tap a Habit to add it to Today's List!</h2>
				{
					tagContent.map((tag,idx)=> {
						return <HabitNurseryTag key={idx} habitTagClick={habitTagClick}>
							{tagContent[idx]}
						</HabitNurseryTag>
					})
				}

			</div>

		</div>

	);
}