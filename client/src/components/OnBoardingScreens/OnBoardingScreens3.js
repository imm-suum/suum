import React, { Component } from 'react';
import './OnBoardingScreens.scss';
import logo3 from './logo3.svg'
import nav3 from './nav3.svg'

function OnBoardingScreens3(){
	return(
		<div className="screen">
			<img src={logo3} alt="test" />
			<h1 className="title">how habits work</h1>
			<p className="help">Once completed by you, it will add to your Weekly Progress of Habits/Goals.</p>
			<img className="nav-icon" src={nav3} alt="test" />
		</div>
	);
}

export default OnBoardingScreens3;
