import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import './Nav.css';

class Nav extends Component{

  state = {
    navigation: [
        {name: 'Habit Nursery'},
        {name: 'History'},
        {name: 'Settings'}
    ],
    otherState: 'someothervalue'
  }

  

  

  render (){
    return (
        <ul className="nav-right">
          <li className="nav-li"><ListItem name={this.state.navigation[0].name} /></li> 
          <li className="nav-li"><ListItem name={this.state.navigation[1].name} /></li>  
          <li className="nav-li"><ListItem name={this.state.navigation[2].name} /></li>   
        </ul>

    )
  }
}

export default Nav;