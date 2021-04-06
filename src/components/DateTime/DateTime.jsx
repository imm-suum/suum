import { Component } from "react";
import './DateTime.scss';

class DateTime extends Component {
  state = {};
  render() {
    return (
      <div className="text-left dateTimeContainer">
        <h1>Today's Habits</h1>
        <h2>{this.props.date.toLocaleDateString()}</h2>
        {/* find method t oconvert date into...english..lol */}
      </div>
    );
  }
}

export default DateTime;
