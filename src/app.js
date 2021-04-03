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
import { CheckInModal } from './components/checkInModal/checkinModal';

//A class that shows all the components that we imported abve ^

//make all screens dark mode.

class App extends Component {


  render() {
	  return (
			<div>
				<CheckInModal/>
			</div>

		);
  }

}

export default App;
