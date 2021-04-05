import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';


class MainSettingCardInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      emailAddress: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
	<form>
      <div className="settings-main">
	  	<h1 className="settings-main-title">Profile</h1>
	  	<p className="settings-main-item">{this.state.username}</p>
	  	<p className="settings-main-item2">{this.state.emailAddress}</p>
	  </div>

	  <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
        name='emailAddress'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default MainSettingCardInfo;
