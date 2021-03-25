import React from 'react';
import HabitTabWidget from './HabitTabWidget.jsx';
import './HabitTabWidget.scss';
import HabitCheckItem from '../HabitCheckList/HabitCheckItem.js';
//need habitcheckItem for content render.

// class loopHabits extends React.Component{

//   constructor(activetab){

//   }

//   // loops through habits object from fetch(Data source)
//   // maybe have spinner untill data comes back from data source 
//   //creates <habitCheckItem dynamicdta callBackFunction/> for item in the tab

//   //method callBackFunction(){
//     // when checkbox is clicked make call back to API for selected item
//   //}
  


// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 'Habit1'};
    }


    changeTabState(tab){
      this.setState({active: tab});

      console.log(this.state.active);
    }

    render() {
      //First, all three habits as children to be rendered so we can call on them during our return onChange events
      const content = {
        //replace 'content' with <HabitCheckItem/>
          tab1: <HabitCheckItem/>,
          tab2: 'content2',
          tab3: <HabitCheckItem/>
      }

      const tabs = ["tab1", "tab2", "tab3"]

      return (
        //needs this div to house the component to show on screen.
         <div> 
            <h1>HI WE'RE TESTING THE HabitTabWidget</h1>

            <div>

              {
                tabs.map((tab, idx)=> {

                  return <HabitTabWidget key={idx} tabCallback={this.changeTabState.bind(this)} tab={tab} />
                })
              }
            </div>
            
                {/*  */}
                {/* <loopHabits tab= {this.state.activetab}/> */}
         </div> 
      );  

    }
}
export default App;