import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';

import { HabitNursery } from './screen/HabitNursery.jsx';
import History from './screen/History.jsx';
import { Settings } from './screen/Settings.jsx';
import Stash from './screen/Stash.jsx';
import WeeklyReport from './screen/WeeklyReport.jsx';


import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//A class that shows all the components that we imported abve ^

class App extends Component {


  render() {
	  return (
		 	//Router navigates the "page" in the broswer search bar to the correct screen component as listed below

			//Switch ensures that each page component is displayed on its own. And the URL has to be an 'exact match'
			<Router>
				
				<Switch>
					<Route path="/" exact component={HabitNursery}/>
					<Route path="/weeklyReport" exact component={WeeklyReport}/>
					<Route path="/stash" exact component={Stash}/>
					<Route path="/history" exact component={History}/>
					<Route path="/settings"  exact component={Settings}/>
				</Switch>

				{/* The hamburger Menu will now appear above all the pages in the app because its always rendered on the app*/}
				<HamburgerMenu/> 

			</Router>

		);
  }

}

export default App;
