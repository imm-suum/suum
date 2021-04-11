import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.scss';


class MainSettingCardInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Christie', //username accepts props.username
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
		<button className="edit-button" onClick={this.handleClick}>
		Edit
		</button>
	  </div>

	  <div className={this.state.showEdit ? 'showEdit edit' : 'edit'}>
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

	  </div>
      </form>
    );
  }
}

export default MainSettingCardInfo;
