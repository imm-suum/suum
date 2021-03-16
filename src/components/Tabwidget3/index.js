import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Habit1'
    }
  }

    setSelected = ( tab ) => {
      this.setState ({selected: tab});
    }
  
  render () {
    return (
      <div className="App">

      </div>
    );
  }  
}

export default Index;


