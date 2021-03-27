import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './HabitCheckItem.css';



class HabitCheckItem extends Component {
    constructor() {
      super();
      this.state = {
        //Here react is tracking what state the check box is  
        isChecked: false
        //React is also controling the state of the input by forcing it to be equal to what ever state is. Using checked={this.state.isChecked} in HTML
      };

      //Binding method to be accessible via the 'this' property of the HabitCheckItem class.
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  
    onChangeValue(event) {
      //this method captures the event of the checkitem being checked and logs the value at the time it was checked and then makes react state to the the current status of the input. 
    
      console.log(event.target.checked);

      //Create variable to store the input state from the event
      const checkBoxState = event.target.checked;

      //update component state to what the input is right now. 
      this.setState({
        isChecked: checkBoxState
      }); 
      
    }

    render() {
      return (
        <div className= "checkItem">
          <input type="checkbox" checked={this.state.isChecked} name="checkItem" onChange={this.onChangeValue}/> 
            <p className= "checkItemText">Meditate for 30mins</p>
        </div>
      );
    }
  }
  


export default HabitCheckItem;