import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCardToggle.css';
import cx from "classnames";	//INSTALLED "npm install classnames"

function SettingCardToggle({rounded = false}){
	const sliderCX = cx('slider',{
		'rounded': rounded
	})

	return(
		<label className="toggle">
		<input type="checkbox" />
		<span className={sliderCX}/>
		</label>
	);
};

export default SettingCardToggle;
