import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
import HabitCheckItem from './components/HabitCheckList/HabitCheckItem.js';
import MainSettingCard from './components/MainSettingCard/MainSettingCard.js';
import SettingCardToggle from './components/SettingCardToggle/SettingCardToggle.js';
import SettingCard from './components/SettingCard/SettingCard.js';
import SettingSocialMedia from './components/SettingSocialMedia/SettingSocial.js';


//A class that shows all the components that we imported abve ^

class App extends Component {


  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
		  //<div>
			  //<HabitCheckItem/>
			  //<HabitCheckItem/>
		  //</div>,

		  //<div>
		  	  //<MainSettingCard/>
		  //</div>,

		  //<div>
		  //</div>,

		  <div>

		  <div className="primary-setting-card">
		      <div className="text">
			  	<SettingCard/>
			  </div>
			  	<SettingCardToggle/>
		   </div>

		   <div className="primary-setting-card">
			 <div className="text">
			   <SettingCard/>
			 </div>
			   <SettingCardToggle/>
		  </div>

		 </div>


		  //<div>
		  	//<SettingSocialMedia/>
		  //</div>

		);
  }

}

export default App;
