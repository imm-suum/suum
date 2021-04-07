import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './HabitNurseryTag.css';

class HabitNurseryTag extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {isSaved: false};
	    this.handleClick = this.handleClick.bind(this);
	  }

	  handleClick() {
	    this.setState(state => ({
	      isSaved: !state.isSaved
	    }));
	  }

	  render() {
	    return (
	      <button onClick={this.handleClick}>
	        {this.state.isSaved ? 'Added!' : 'Habit 1'}
	      </button>
	    );
	  }
	}

export default HabitNurseryTag;
