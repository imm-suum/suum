import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Burger from './Burger.jsx';

class HamburgerMenu extends Component {
  render(){






    return (
      <div>
        <Burger className="bottom"/>
          <Nav/>
      </div>

    )

  }
}
  
export default HamburgerMenu;