import { Component } from "react";


class DateTime extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Current Date</h1>
        <h2>{this.props.date.toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default DateTime;
