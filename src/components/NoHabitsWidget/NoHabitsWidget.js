import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './NoHabitsWidget.css';

class NoHabitsWidget extends Component {

	state={
		showInfo:false
	}

	handleToogle=()=>{
		this.setState({
			showInfo:!this.state.showInfo
		})
	}

	render(){
		return(
			<div className="container">
			<div className="accordion">
			<div className="single_accordion">
			<div className="tab" onClick={this.handleToogle}>
				<p>Click here for some tips on mindfulness!</p>
			</div>

			<div className="container2">
			<div className={this.state.showInfo ? 'showContent content' : 'content' }>
				<p className="textbox">habit habit habit habit habit habit</p>
			</div>
			</div>
		</div>
		</div>
	</div>
		)
	}
}

export default NoHabitsWidget;
