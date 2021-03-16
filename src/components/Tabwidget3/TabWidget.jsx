import React, { Component } from 'react';

class TabWidget extends Component {

    render () {
        //empty render method. only return.
      return (
       <div style={{width: '30%'}}>
         <ul className="nav nav-tabs">
             {/* loop through list in JS 
                1. tabs prop. array of string to define names of tab
                2. selected is currently seleted tab
                3. setSelected is method that sets the currently seected Tab
             */}
            {this.props.tabs.map(
               //for each tab:
                tab => {
                   //if our tab is equal to selected,then use style 'active' or none 
                   const active = (tab === this.props.selected ? 'active' : '');
                   

                   //return in the map loop
                   return (
                     //key is required for map loop
                     <li className="nav-item" key={ tab }>
                         <a href="" className={"nav-link" + active} onclick={() => this.props.setSelected(tab) }>
                             { tab }
                         </a>
                     </li>
                   );
                }
             )
            }
         </ul>
         {/* whenever we use this component, anything we nest inside will nder next to ul */}
         {this.props.children}
       </div>     
      );
  }
}

export default TabWidget;