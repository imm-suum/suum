import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';

import MainSettingCard from '../components/MainSettingCard/MainSettingCard.js';
import SettingCard from '../components/SettingCard/SettingCard.js';
import SettingSocialMedia from '../components/SettingSocialMedia/SettingSocial.js';


//A Class that holds all components for Settings Screen

class Settings extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>

				<SettingCard/>
                <MainSettingCard/>

				<SettingSocialMedia/>

            </div>

		);
  }

}

export default Settings;
