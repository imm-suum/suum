import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './WeeklyReviewCard.scss';

class WeeklyReviewCard extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {isToggled: true};
	    this.handleClick = this.handleClick.bind(this);
	  }

	  handleClick() {
	    this.setState(state => ({
	      isToggled: !state.isToggled
	    }));
	  }

	  render() {
	    return (
	      <div className="card" onClick={this.handleClick}>
		  <div className="info">
			<h1 className="title">
				{this.state.isToggled ? "This Week's Plant" : ''}
			</h1>
			<p className="progress">
				{this.state.isToggled ? '' : "Completed Tasks"}
			</p>
			<div className="bar-container">
				<div className="bar">
					<p className="num">14/21</p>
				</div>
			</div>
		  	</div>
			<button>
  				Great Job!
			</button>
		  </div>
	    );
	  }
	}

export default WeeklyReviewCard;
