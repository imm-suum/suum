import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './MainSettingCardInfo.css';

class MainSettingCardInfo extends Component{
	state = {
		value:"Enter User Info Here",
		isInEditMode: false
	}

	changeEditMode = () => {
		this.setState({
			isInEditMode: !this.state.isInEditMode
		})
	}

	updateComponentValue = () => {
		this.setState({
			isInEditMode: false,
			value: this.refs.theTextInput.value
		})
	}

	renderEditView = () => {
		return <div>
		<input
			type="text"
			id="text"
			defaultValue={this.state.value}
			ref="theTextInput"
		/>
			<button onClick={this.changeEditMode}>X</button>
			<button onClick={this.updateComponentValue}>Save</button>
		</div>
	}

	renderDefaultView = () => {
		return <div onDoubleClick={this.changeEditMode}>
			{this.state.value}
		</div>
	}


	render() {
		return this.state.isInEditMode ?
		this.renderEditView() :
		this.renderDefaultView()
	}
}

export default MainSettingCardInfo;
