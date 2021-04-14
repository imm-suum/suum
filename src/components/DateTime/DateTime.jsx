import { Component } from "react";
import './DateTime.scss';

class DateTime extends Component {
  state = {};

  render() { 

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    return (
      <div className="text-left dateTimeContainer">
        <h1 className="todayTitle">Today's Habits</h1>
        <h2 className="todayDate">{this.props.date.toLocaleDateString(undefined, options)}</h2>
      </div>
    );
  }
}

export default DateTime;