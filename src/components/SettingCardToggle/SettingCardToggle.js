import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './SettingCardToggle.scss';

class SettingCardToggle extends Component{
	constructor(){
		super();
		this.state = {
			toggle:false
		};

		this.onChangeValue = this.onChangeValue.bind(this);
	}

	onChangeValue(event){
		console.log(event.target.value);

	if (this.state.toggle === true){
		this.setState({toggle:false});
	} else {
		this.setState({toggle:true});
	}

	}

	render(){
		return(
			<label className="switch">
			<input type="checkbox" value={this.state.toggle} name="toggle" onChange={this.onChangeValue}/>
			<span className="slider round"></span>
			</label>
		)
	}
}


export default SettingCardToggle;
