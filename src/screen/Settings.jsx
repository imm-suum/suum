import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';

import SettingCard from '../components/SettingCard/SettingCard.js';
import SettingSocialMedia from '../components/SettingSocialMedia/SettingSocial.js';
import MainSettingCardInfo from '../components/MainSettingCardInfo/MainSettingCardInfo.js';


//A Class that holds all components for Settings Screen

export const Settings =  () => {


	const settingScreenTitle={
		fontSize: "24px",
		fontWeight: "600",
		color: "#323232",
		marginBottom: "1rem"
	}
	const bodyPadding = {
		padding:"2rem"
	}

	//GET User call by userId
	//populate name & email in <MainSettingCardInfo username={(response.username)} email={(response.email)}/>

	//When edit is finished => PUSH API call
		//adds new data into user Object
		//returns current state => take return and populate settings card.


	  return (

		  //add imported classes here
		  //always have div to place component notes

       <div style={bodyPadding}>
				<h1 style={settingScreenTitle}>Settings</h1> 
				<MainSettingCardInfo/>
        
        {/* NOtifications  */}
			
				{/* SettingCard comonent to call toggle in itself. Accepts label prop to change text. */}
				{/* API call happens IN SettingCard component. */}
				<SettingCard/>


				<SettingSocialMedia/>

            </div>

		);


}
