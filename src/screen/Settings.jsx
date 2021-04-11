import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';

import SettingCard from '../components/SettingCard/SettingCard.js';
import SettingSocialMedia from '../components/SettingSocialMedia/SettingSocial.js';
import MainSettingCardInfo from '../components/MainSettingCardInfo/MainSettingCardInfo.js';


//A Class that holds all components for Settings Screen

export const Settings =  () => {


	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<MainSettingCardInfo/>

				<SettingCard/>

				<SettingSocialMedia/>

            </div>

		);


}
