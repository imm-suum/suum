import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
//import HabitCheckItem from './components/HabitCheckList/HabitCheckItem.js';
//import Nav from './components/HamburgerMenu/Nav.jsx';
import Burger from './components/HamburgerMenu/Burger.jsx';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu.js';


//A class that shows all the components that we imported abve ^ 

class App extends Component {




    render() {
        return (

            //add imported classes here
            //always have div to place component notes
            <div>

                <HamburgerMenu />
            
            </div>
            

            
          );
    }

}

export default App;