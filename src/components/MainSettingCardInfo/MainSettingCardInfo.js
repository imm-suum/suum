import React, { useEffect, useState } from 'react';
import './MainSettingCardInfo.scss';
import axios from 'axios';

export const MainSettingCardInfo = ({userInfo}) => {

	const [userData, setUserData] = useState(userInfo);
	const [newUserData, setNewUserData] = useState({});
	const [showEdit, setShowEdit] = useState(false);

  const myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    setUserData({[nam]: val});

	try {
		
		// fetch data from a url endpoint
		const data = axios.post(`/api/user/edit`, userData)
		.then(res=>{
			console.log(res)
		});
		return data;
	} catch(error) {
		console.log("error", error);
		// appropriately handle the error
	}
  }


  const onClickHandler = (e) => {
	  e.preventDefault();
	  setShowEdit(!showEdit);
   }


    return (
	<form>
      <div className="settings-main">
	  	<h1 className="settings-main-title">Profile</h1>
	  	<p className="settings-main-item">{userData.name}</p>
	  	<p className="settings-main-item2">{userData.phoneNumber}</p>
		<a className="edit-button" onClick={onClickHandler}>
			Edit
		</a>
	  </div>

	  <div className={showEdit ? 'showEdit edit' : 'edit'}>
	  <input
        type='text'
		placeholder='Full Name'
        name='name'
        onChange={myChangeHandler}
      />
      <input
        type='text'
		placeholder='Phone Number'
        name='phoneNumber'
        onChange={myChangeHandler}
      />

	  </div>
      </form>
    );
}

