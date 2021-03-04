import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCardToggle.css';
import cx from "classnames";	//INSTALLED "npm install classnames"

function SettingCardToggle({rounded = false, isToggled, onToggle}){
	const sliderCX = cx('slider',{
		'rounded': rounded
	})

	return(
		<label className="toggle">
		<input type="checkbox" checked={isToggled} onChange={onToggle}/>
		<span className={sliderCX}/>
		</label>
	);
};

export default SettingCardToggle;
