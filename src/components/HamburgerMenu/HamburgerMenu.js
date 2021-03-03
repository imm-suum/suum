import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HamburgerMenu.css';

class App extends Component {


    render() {
        return (

            //add imported classes here
            //always have div to place component notes
            <div>
                <HabitCheckItem/>
                <HabitCheckItem/>
            
            </div>
            
            
            
          );
    }

}

export default App;