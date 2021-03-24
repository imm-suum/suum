import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
import HabitCheckItem from './components/HabitCheckList/HabitCheckItem.js';
import Settings from './screen/Settings.jsx';

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
					<Route path="/stash" exact component={HabitCheckItem}/>
					<Route path="/history" exact component={HabitCheckItem}/>
					<Route path="/settings"  exact component={Settings}/>
				</Switch>

				<HamburgerMenu/>

				
			

				



			
			
			
			</Router>

		);
  }

}

export default App;
