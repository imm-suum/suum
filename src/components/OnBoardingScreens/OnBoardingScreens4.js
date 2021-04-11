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
		<div className="screen2">
			<img src={logo4} alt="test" />
			<h1 className="title2">how habits work</h1>
			<p className="help2">this is how suum works</p>
			<a className="next2" href="/Login">
				Proceed
			</a>
			<img className="nav-icon" src={nav4} alt="test" />
		</div>
	);
}

export default OnBoardingScreens4;
