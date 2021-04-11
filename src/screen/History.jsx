import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../app.css';
import DateTime from '../components/DateTime/DateTime';


//A Class that holds all components for Habit Nursery Screen

class History extends Component {

  render() {
	  return (

		  //add imported classes here
		  //always have div to place component notes
			<div>
				<DateTime date={new Date()} />
      </div>

		);
  }

}

export default History;
