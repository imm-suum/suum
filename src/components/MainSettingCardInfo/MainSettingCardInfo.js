import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';
import axios from 'axios';

class MainSettingCardInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.userInfo.name,
      phoneNumber: props.userInfo.phoneNumber,
	  showEdit: false,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
	try {
		const newUserData = this.state;
		const jwttoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjYTk4YTM1ZTEwNDJhY2FmNWJlOTIiLCJpYXQiOjE2MTgxOTc1ODJ9.WX5wYXx963YKE_Vhqbv_CbsW4HO0lJIcIsXsnVMqvls";
		// fetch data from a url endpoint
		const data = axios.post("http://localhost:5000/api/user/edit",{headers:{'auth-token':jwttoken}}, newUserData)
		.then(res=>{
			console.log(res)
		});
		return data;
	} catch(error) {
		console.log("error", error);
		// appropriately handle the error
	}
  }


  handleClick = (e) => {
	  e.preventDefault();
	  this.setState({
		  showEdit:!this.state.showEdit

	  })
   }

  render() {
    return (
	<form>
      <div className="settings-main">
	  	<h1 className="settings-main-title">Profile</h1>
	  	<p className="settings-main-item">{this.state.username}</p>
	  	<p className="settings-main-item2">{this.state.phoneNumber}</p>
		<a className="edit-button" onClick={this.handleClick}>
			Edit
		</a>
	  </div>

	  <div className={this.state.showEdit ? 'showEdit edit' : 'edit'}>
	  <input
        type='text'
		placeholder='Full Name'
        name='username'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
		placeholder='Phone Number'
        name='phoneNumber'
        onChange={this.myChangeHandler}
      />

	  </div>
      </form>
    );
  }
}

export default MainSettingCardInfo;
