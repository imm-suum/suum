import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './HabitCheckItem.css';



class HabitCheckItem extends Component {
    constructor() {
      super();
      this.state = {
        checked: false
      };

      //Binding method to be accesicble via the 'this' property of the HabitCheckItem class.
      this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
    //this method captures the event of the checkitem being checked and logs the value at the time it was checked and then filps the react state to the opposit of what it was
    console.log(event.target.value);

    //check current state and then flip value to the opposit
    if (this.state.checked === true){
        this.setState({checked: false}); //update component state
      } else {
        this.setState({checked: true}); //update component state
      }

    }



    changeColour(){

        // let classes = " checkItem > input";
        // classes += this.state.count === 0 ? "warning" : "primary";
        // //+= is equal to x+=y is x=x+y so classes is if the count is 0 then classes = "badge m-2 badge-warning, else classes = "badge m-2 badge-primary
        // return classes;
    }



    render() {
      return (
        <div className= "checkItem">
          <input type="checkbox" value={this.state.checked} name="checkItem" onChange={this.onChangeValue}/>
            <p className= "checkItemText">Meditate for 30mins</p>
        </div>
      );
    }
  }


//  ReactDOM.render(
//     <HabitCheckItem />,
//     document.getElementById('root')
//   );

export default HabitCheckItem;
