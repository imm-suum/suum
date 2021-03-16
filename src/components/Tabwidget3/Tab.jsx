import React, { Component } from 'react';

class Tab extends Component {

  render() {
    //make conditional. take in one prop 'isSelected'. 
    //if this tab is selected then show content. 
    //if not do not show content.
    if (this.props.isSelected) {
      return (
        <div>
          { this.props.children }
        </div>
      );
    }
  }
}

export default Tab;