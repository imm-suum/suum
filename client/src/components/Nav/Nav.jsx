import React from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import './Nav.scss';
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
          <Link to='/home'>
          <li className="nav-li"><ListItem name= "Home" /></li>
          </Link>

          <Link to='/history'>
          <li className="nav-li"><ListItem name="History" /></li>
          </Link>

          <Link to='/habitNursery'>
          <li className="nav-li"><ListItem name="Habit Nursery" /></li>
          </Link>
          
          <Link to='/settings'>
          <li className="nav-li"><ListItem name="Settings" /></li>
          </Link>


        </ul>

    );
}

export default Nav;
