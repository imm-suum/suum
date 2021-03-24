import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
import HabitCheckItem from './components/HabitCheckList/HabitCheckItem.js';
import MainSettingCard from './components/MainSettingCard/MainSettingCard.js';
import SettingCardToggle from './components/SettingCardToggle/SettingCardToggle.js';
import SettingCard from './components/SettingCard/SettingCard.js';
import SettingSocialMedia from './components/SettingSocialMedia/SettingSocial.js';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//A class that shows all the components that we imported abve ^

class App extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<Router>

				
				<Switch>
					<Route path="/" exact component={HabitCheckItem}/>
					<Route path="/weeklyReport" exact component={HabitCheckItem}/>
					<Route path="/stashed" exact component={HabitCheckItem}/>
					<Route path="/history" exact component={HabitCheckItem}/>
					<Route path="/settings"  exact component={SettingSocialMedia}/>
				</Switch>

				<div className="primary-setting-card">
					<div className="text">
						<SettingCard/>
					</div>
						<SettingCardToggle/>
				</div>
				<HabitCheckItem/>

				<HamburgerMenu/>



			
				<SettingSocialMedia/>
			
			</Router>

		);
  }

}

export default App;
