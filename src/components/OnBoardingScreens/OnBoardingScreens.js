import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './OnBoardingScreens.scss';
import logo from './logo.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import logo4 from './logo4.svg'
import nav from './nav.svg'

function OnBoardingScreens(){


	return(
		<div className="screen">
			<img src={logo} alt="test" />
			<h1 className="title">how suum works</h1>
			<p className="help">Set 3 Daily Goals/Habits! Throughout the day, suum will remind you to complete your habits!</p>
			<a className="next" href="/onboarding2">
				Proceed
			</a>
			<img className="nav-icon" src={nav} alt="test" />
		</div>
	);
}

export default OnBoardingScreens;
