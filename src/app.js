import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';

import { Home } from './screen/Home.jsx';
import History from './screen/History.jsx';
import { Settings } from './screen/Settings.jsx';
import { Login } from './screen/Login.jsx';
import Stash from './screen/Stash.jsx';
import WeeklyReport from './screen/WeeklyReport.jsx';

import OnBoardingScreens from './screen/OnBoarding.jsx';
import OnBoardingScreens2 from './screen/OnBoarding2.jsx';
import OnBoardingScreens3 from './screen/OnBoarding3.jsx';
import OnBoardingScreens4 from './screen/OnBoarding4.jsx';


import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//A class that shows all the components that we imported abve ^

//make all screens dark mode.

class App extends Component {


  render() {
	  return (
			//user session?
		 	//Router navigates the "page" in the broswer search bar to the correct screen component as listed below

			//Switch ensures that each page component is displayed on its own. And the URL has to be an 'exact match'
			<Router>

				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/onBoarding"  exact component={OnBoardingScreens}/>
						<Route path="/onBoarding2"  exact component={OnBoardingScreens2}/>
						<Route path="/onBoarding3"  exact component={OnBoardingScreens3}/>
						<Route path="/onBoarding4"  exact component={OnBoardingScreens4}/>


					<Route path="/login" exact component={Login}/>
					<Route path="/weeklyReport" exact component={WeeklyReport}/>
					<Route path="/habitNursery" exact component={Stash}/>
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
