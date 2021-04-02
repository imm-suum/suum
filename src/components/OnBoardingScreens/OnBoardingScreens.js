import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './OnBoardingScreens.scss';
import test from './logo.svg'

function OnBoardingScreens(){
	return(
		<div className="screen">
			 <img src={test} alt="test" />
			<h1 className="title">how suum works</h1>
		</div>
	);
}

export default OnBoardingScreens;
