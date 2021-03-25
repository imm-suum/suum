import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './HabitTabWidget.scss';

class HabitTabWidget extends Component {
    constructor(props){
        super(props);
        this.state ={
            sizes: {},
            activeTab: false
        };
        this.els = {};

        //you can still put an aimation in here 
    }
   

   
    render() {
        console.log (this.state);
        
        return (
            
            <button 
            onClick={()=>{this.props.tabCallback(this.props.tab)}}
            >{this.props.tab}</button>
            
        );
    }



}
export default HabitTabWidget;