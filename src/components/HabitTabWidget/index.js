import React, {useState} from 'react';
import HabitTabWidget from './HabitTabWidget.jsx';
import './HabitTabWidget.scss';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';

import { NewHabitTabWidget } from './newHabitTabWidget';
//need habitcheckItem for content render.


export const Tab = () => {
  const [activeTab, setActiveTab ] = useState('tab1');
  const tabs = ["tab1", "tab2", "tab3"]

  const content = {
    tab1: <HabitCheckItem habitName= "habit1"/>,
    tab2: 'content2',
    tab3: <HabitCheckItem/>
  }
  
  const onTabClickHandler = (tab) => {
    setActiveTab(tab);
  }
  const displayContent = (tab) => {
    return content[tab];
  }

  return (
    //needs this div to house the component to show on screen.
     <div> 
        <h1>HI WE'RE TESTING THE HabitTabWidget</h1>
        <div>
          {
            tabs.map((tab, idx)=> {
              return <NewHabitTabWidget key={idx} onClickHandler={onTabClickHandler} tab={tab} />
            })
          }
        <div className='HabitTabWidget bg-green'>{displayContent(activeTab)}</div>
        </div>
     </div> 
  );  
} 

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {active: 'tab1'};
//     }


//     changeTabState(tab){
//       this.setState({active: tab});

//       console.log(this.state.active);
//     }

//     render() {
//       //First, all three habits as children to be rendered so we can call on them during our return onChange events
//       const content = {
//         //replace 'content' with <HabitCheckItem/>
//           tab1: <HabitCheckItem/>,
//           tab2: 'content2',
//           tab3: <HabitCheckItem/>
//       }

//       const tabs = ["tab1", "tab2", "tab3"]

//       return (
//         //needs this div to house the component to show on screen.
//          <div> 
//             <h1>HI WE'RE TESTING THE HabitTabWidget</h1>

//             <div>

//               {
//                 tabs.map((tab, idx)=> {

//                   return <NewHabitTabWidget key={idx} onClickHandler={setActiveTab} tab={tab} />
//                 })
//               }
            
//                 {/*  */}
//             <div className='HabitTabWidget bg-green'>{displayContent}</div>
//             {/* content object to render when tab is active */}
//             {/* <loopHabits tab= {this.state.activetab}/> */}
//             </div>
//          </div> 
//       );  

//     }
// }
// export default App;