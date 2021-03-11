import React from 'react';
import HabitTabWidget from './HabitTabWidget.jsx';
import './HabitTabWidget.scss';
import HabitCheckItem from '../HabitCheckList/HabitCheckItem.js';
//need habitcheckItem for content render.

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 'Habit1'};
    }

    render() {
      //First, all three habits to be rendered so we can call on them during our return onChange events
      const content = {
        //replace 'content' with <HabitCheckItem/>
          Habit1: <HabitCheckItem/>,
          Habit2: <HabitCheckItem/>,
          Habit3: <HabitCheckItem/>
      };

      return (
        //needs this div to house the component to show on screen.
         <div> 
             <HabitCheckItem/>
            <h1>HI WE'RE TESTING THE HabitTabWidget</h1>

            <div>
            <HabitTabWidget 
                //active prop for whichever Tab is Active
                active= {this.state.active}
                onChange= {active => this.setState({active})}
                //delcare onChange event for each HabitTab when tab is clicked
            >
              <div key='Habit1' className='circle-btn'>Habit 1</div>
              <div key='Habit2' className='circle-btn'>Habit 2</div>
              <div key='Habit3' className='circle-btn'>Habit 3</div>

            </HabitTabWidget>

            <p className='HabitTabWidget bg-green'>{content[this.state.active]}</p>
            {/* content object to render when tab is active */}
            </div>
         </div> 
      );  

    }
}
export default App;