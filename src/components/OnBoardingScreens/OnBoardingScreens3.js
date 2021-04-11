import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './OnBoardingScreens.scss';
import logo from './logo.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import logo4 from './logo4.svg'
import nav3 from './nav3.svg'

function OnBoardingScreens3(){
	return(
		<div className="screen2">
			<img src={logo3} alt="test" />
			<h1 className="title2">how habits work</h1>
			<p className="help2">this is how suum works</p>
			<a className="next2" href="/onboarding4">
				Proceed
			</a>
			<img className="nav-icon" src={nav3} alt="test" />
		</div>
	);
}

export default OnBoardingScreens3;
