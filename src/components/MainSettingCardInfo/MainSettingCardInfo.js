import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';
import axios from 'axios';

class MainSettingCardInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.userInfo.name,
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
		const data = axios.patch('/api/user/edit', newUserData)
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
	  	<p className="settings-main-item">{this.state.name}</p>
	  	<p className="settings-main-item2">{this.state.phoneNumber}</p>
		<a className="edit-button" onClick={this.handleClick}>
			Edit
		</a>
	  </div>

	  <div className={this.state.showEdit ? 'showEdit edit' : 'edit'}>
	  <input
        type='text'
		placeholder='Full Name'
        name='name'
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
