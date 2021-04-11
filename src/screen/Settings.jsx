import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';

import SettingCard from '../components/SettingCard/SettingCard.js';
import SettingSocialMedia from '../components/SettingSocialMedia/SettingSocial.js';
import MainSettingCardInfo from '../components/MainSettingCardInfo/MainSettingCardInfo.js';
import DateTime from '../components/DateTime/DateTime';


//A Class that holds all components for Settings Screen

export const Settings =  () => {


	//GET User call by userId
	//populate name & email in <MainSettingCardInfo username={(response.username)} email={(response.email)}/>

	//When edit is finished => PUSH API call
		//adds new data into user Object
		//returns current state => take return and populate settings card.


	  return (

		  //add imported classes here
		  //always have div to place component notes

       <div>
				<MainSettingCardInfo/>
        
        {/* NOtifications  */}
			
				{/* SettingCard comonent to call toggle in itself. Accepts label prop to change text. */}
				{/* API call happens IN SettingCard component. */}
				<SettingCard/>


				<SettingSocialMedia/>

            </div>

		);


}
