import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './OnBoardingScreens.scss';
import logo from './logo.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import logo4 from './logo4.svg'
import nav4 from './nav4.svg'

function OnBoardingScreens4(){
	return(
		<div className="screen">
			<img src={logo4} alt="test" />
			<h1 className="title">how habits work</h1>
			<p className="help">At the end of each Week, you will see your progress for the week and recieve your suum plant.</p>
			<img className="nav-icon" src={nav4} alt="test" />
			<a className='next' href="/register">Get Started</a>
		</div>
	);
}

export default OnBoardingScreens4;
