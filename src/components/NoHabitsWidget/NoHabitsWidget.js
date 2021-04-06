import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './NoHabitsWidget.scss';

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

		//GET Array of Tips
		//Run Random function = return 1
		//smake response a variable

		return(
			<div className="noHabitsContainer">
			<div className="accordion">
			<div className="single_accordion">
			<div className="tab" onClick={this.handleToogle}>
				{/* return content.contentTitle */}
				<p>Click here for some tips on mindfulness!</p>
			</div>
			{/* edit CSS selectors for merge */}
			<div className="container2 bg-maingreen">
			<div className={this.state.showInfo ? 'showContent content' : 'content' }>
				<div className="textbox">
					{/* return random tip content in p tag */}
					<p>habit habit habit habit habit habit</p>
					{/* return tip URL anchor tag href*/}
					<a href="{(response['Contentlink'])}" className="readMoreLink">Read More</a>
				</div>
			</div>
			</div>
		</div>
		</div>
	</div>
		)
	}
}

export default NoHabitsWidget;
