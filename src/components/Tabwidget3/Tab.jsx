import React, { Component } from 'react';

class Tab extends Component {

  render() {
    //make conditional. take in one prop 'isSelected'. 
    if (this.props.isSelected) {
      //if this tab is selected then show tab content. 
      return (
        <div>
          { this.props.children }
        </div>
      );
    }
    //if not selected:
    return null 
  }
}

export default Tab;