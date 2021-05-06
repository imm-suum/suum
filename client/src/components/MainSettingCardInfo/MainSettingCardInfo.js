import React, { useEffect, useState } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';
import axios from 'axios';

export const MainSettingCardInfo = () => {

	const [userData, setUserData] = useState({});
	const [newUserData, setNewUserData] = useState({
		"name": "",
		"phoneNumber": ""
	});
	const [showEdit, setShowEdit] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);


	useEffect(() => {
		async function getSettings() {
			const getSettings = await axios.get('/api/user')
				.then(response => {
					setUserData(response.data);
					setNewUserData(response.data);
				});
		}

		getSettings();

	}, []);

	useEffect(() => {

		async function updateSettings() {
			const editUser = await axios.patch('/api/user/edit', {
				"name": newUserData.name,
				"phoneNumber": newUserData.phoneNumber,
			})
				.then(response => {

				});
		}

		if (submitted) {
			updateSettings();
		}

	}, [submitted]);



	const myChangeHandlerName = (event) => {
		setSubmitted(false);
		event.persist();

		setNewUserData((values) => ({
			...values,
			name: event.target.value,
		}));

	}

	const myChangeHandlerPhoneNumber = (event) => {
		setSubmitted(false);
		event.persist();

		setNewUserData((values) => ({
			...values,
			phoneNumber: event.target.value,
		}));


	}

	const handleSubmit = (e) => {

		console.log(newUserData, "new data");

		e.preventDefault();
		if (newUserData.name && newUserData.phoneNumber) {
			setValid(true);
			setSubmitted(true);
			setUserData(newUserData);

		}


	};


	const onClickHandler = (e) => {
		e.preventDefault();
		setShowEdit(!showEdit);
	}



	return (
		<div>
			<div className="settings-main">
				<h1 className="settings-main-title">Profile</h1>
				<p className="settings-main-item">{userData.name}</p>
				<p className="settings-main-item2">{userData.phoneNumber}</p>
				<a className="edit-button" onClick={onClickHandler}>Edit</a>
			</div>
			<form className={showEdit ? 'showEdit edit' : 'edit'} onSubmit={handleSubmit}>
				<input
					id="name"
					type='text'
					placeholder='Full Name'
					name='name'
					onChange={myChangeHandlerName}
					value={newUserData.name}
				/>
				{submitted && !newUserData.name && <span id='name-error'>Please enter a Name</span>}
				<input
					id="phoneNumber"
					type='text'
					placeholder='Phone Number'
					name='phoneNumber'
					onChange={myChangeHandlerPhoneNumber}
					value={newUserData.phoneNumber}
				/>
				{submitted && !newUserData.phoneNumber && <span id='phoneNumber-error'>Please enter a phoneNumber</span>}

				<input className="eSubmit" type="submit" value="Submit" />
				{submitted && <span class='success-message'>Success! Thank you for registering</span>}




			</form>
		</div>
	);
}
