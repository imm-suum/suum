import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './OnBoardingScreens.scss';
import logo2 from './logo2.svg'
import nav2 from './nav2.svg'

function OnBoardingScreens2(){
	return(
		<div className="screen">
			<img src={logo2} alt="test" />
			<h1 className="title">how suum works</h1>
			<p className="help">At the end of each day, suum will check up and see the progress of your daily habits.</p>
			<img className="nav-icon" src={nav2} alt="test" />
		</div>
	);
}

export default OnBoardingScreens2;
