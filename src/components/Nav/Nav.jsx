import React from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import './Nav.css';

const Nav = (props) => {

  // state = {
  //   navigation: [
  //       {name: 'Habit Nursery', link: "https://www.google.com"},
  //       {name: 'History', link: "#"},
  //       {name: 'Settings', link: "#"}
  //   ],
  //   otherState: 'someothervalue'
  // }

  

  

    //define the classes that style the nav compoenent
    let navClasses = 'nav-right';
    
    if (props.show) {
      navClasses = 'nav-right open';
    }

    return (
        <ul className={navClasses}>
          <li className="nav-li"><ListItem name= "Habit Nursery" /></li> 
          <li className="nav-li"><ListItem name="History" /></li>  
          <li className="nav-li"><ListItem name="Settings" /></li>   
        </ul>

    );
}

export default Nav; 