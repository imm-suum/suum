import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './HamburgerMenu.css';

class HamburgerMenu extends useState {
    constructor() {
      super();
      this.state = {
        collapsed: false
      };
    }
  
    //need method to expand the menu nav.

 
  
    render() {
      return (
        <div>
            {/* where the components elements should show */}
        </div>
      );
    }
  }
  
//to self-render for testing
//  ReactDOM.render(
//     <HabitCheckItem />,
//     document.getElementById('root')
//   );

export default HamburgerMenu;