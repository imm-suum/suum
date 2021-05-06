import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCard.scss';
import axios from 'axios';

export const SettingCard = ({userInfo}) =>  {

	console.log(userInfo);
	console.log(userInfo.notifications, "notification setting");
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		setToggle(userInfo.notifications);

	},[userInfo]);

	console.log(toggle, "toggle1");

	useEffect(() => {

		async function updateNotifications() {
			const updateNotif = await axios.patch('https://suum-app.herokuapp.com/api/user/setNotif', {
				"notifications": toggle,
			})
				.then(response => {

				});
		}

		updateNotifications();

	},[toggle]);	





	const onChangeValue  = (event) => {
		console.log(event.target.value);

	if (toggle === true){
		setToggle(false);
	}else{
		setToggle(true);
	}

	}


		return(
			
			<div className="primary-setting-card">
				<h1 className="setting-card-title">Notifications</h1>
				<div className="spacing"></div>
				<label className="switch">
					<input type="checkbox" checked={toggle} name="Toggle" onChange={onChangeValue}/>
					<span className="slider round"></span>
				</label>
			</div>

		);


}

