import React from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  // state = {
  //   navigation: [
  //       {name: 'Habit Nursery', link: "https://www.google.com"},
  //       {name: 'History', link: "#"},
  //       {name: 'Settings', link: "#"}
  //   ],
  //   otherState: 'someothervalue'
  // }

  

  

    //define the classes that style the nav component
    let navClasses = 'nav-right';
    //change classes when the nav is opened.
    if (props.show) {
      navClasses = 'nav-right open';
    }

    return (
        <ul className={navClasses}>
          <Link to='/'>
          <li className="nav-li"><ListItem name= "Home" /></li> 
          </Link>

          <Link to='/history'>
          <li className="nav-li"><ListItem name="History" /></li>
          </Link>  
          
          <Link to='/settings'>
          <li className="nav-li"><ListItem name="Settings" /></li> 
          </Link>

          <Link to='/stash'>
          <li className="nav-li"><ListItem name="Habit Nursery" /></li> 
          </Link>

        </ul>

    );
}

export default Nav; 