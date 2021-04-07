import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCard.scss';
import SettingCardToggle from '../SettingCardToggle/SettingCardToggle.js';

function SettingCard(){
	return(
		<div className="primary-setting-card">
			<div className="text">
				<div>
					<h1 className="settings-card-title">Notifications</h1>
				</div>
			</div>
			<SettingCardToggle/>
		</div>
	);


}

export default SettingCard;
