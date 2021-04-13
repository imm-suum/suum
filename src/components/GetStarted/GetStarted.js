import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './GetStarted.scss';
import suumIcon from '../../assets/suumIcon.svg'


function GetStartedScreen(){
	return(
		<div className="GetStarted">
			<img src={suumIcon} alt="test" />
			<h1 className="gsTitle">suum</h1>
			<a className='gsButton' href="/onboarding">Get Started</a>
			<a className='gsButton' href="/login">Go to Homespace</a>
		</div>
	);
}

export default GetStartedScreen;
