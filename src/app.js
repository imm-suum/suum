import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
import HabitTabWidget from './components/HabitTabWidget/index.js';


import './scss/main.scss'
//A class that shows all the components that we imported abve ^

class App extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes

		  <div>
			  <HabitTabWidget/>
		 </div>


		  //<div>
		  	//<SettingSocialMedia/>
		  //</div>

		);
  }

}

export default App;
