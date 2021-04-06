import { Component } from "react";
import './DateTime.scss';

class DateTime extends Component {
  state = {};
  render() {
    return (
      <div className="text-left dateTimeContainer">
        <h1>Current Date</h1>
        <h2>{this.props.date.toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default DateTime;
