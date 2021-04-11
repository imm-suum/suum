import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';


class MainSettingCardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Christie',
      emailAddress: 'christie.112@gmail.com',
	  showEdit: false,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
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
	  	<p className="settings-main-item2">{this.state.emailAddress}</p>
		<a className="edit-button" onClick={this.handleClick}>
			Edit
		</a>
	  </div>

	  <div className={this.state.showEdit ? 'showEdit edit' : 'edit'}>
	  <input
        type='text'
		placeholder='Username'
        name='username'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
		placeholder='Email Address'
        name='emailAddress'
        onChange={this.myChangeHandler}
      />

	  </div>
      </form>
    );
  }
}

export default MainSettingCardInfo;
