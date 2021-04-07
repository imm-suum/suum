import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabWidget from './TabWidget.jsx';
import Tab from './Tab.jsx';
import HabitCheckItem from '../HabitCheckList/HabitCheckItem';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Habit1'
    }
  }

    setSelected = ( tab ) => {
      this.setState ({selected: tab});
    }
  
  render () {
    return (
      <div className="App">
        <TabWidget tabs={['Habit1', 'Habit2','Habit3']} 
        selected={this.state.selected} 
        setSelected={this.setSelected}>
          <Tab isSelected={this.state.selected === 'Habit1'}>
            <HabitCheckItem/>
          </Tab>
            
          <Tab isSelected={this.state.selected === 'Habit2'}>
            <HabitCheckItem/>
          </Tab>
            
          <Tab isSelected={this.state.selected === 'Habit3'}>
            <HabitCheckItem/>
          </Tab>
            
        </TabWidget>
      </div>
    );
  }  
}

export default Index;


