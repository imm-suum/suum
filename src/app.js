import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './app.css';
//import HabitCheckItem from './components/HabitCheckList/HabitCheckItem.js';
import MainSettingCard from './components/MainSettingCard/MainSettingCard.js';
import SettingCardToggle from './components/SettingCardToggle/SettingCardToggle.js';
import SettingCard from './components/SettingCard/SettingCard.js';
import SettingSocialMedia from './components/SettingSocialMedia/SettingSocial.js';

//A class that shows all the components that we imported abve ^

const App = () => {

	const [isToggled, setIsToggled] = useState(false);

        return (

            //add imported classes here
            //always have div to place component notes

			//<div>
                //<HabitCheckItem/>
                //<HabitCheckItem/>
            //</div>

			//<div>
			//</div>

			//<div>
				//<SettingCardToggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
			//</div>,

		<div>
			<MainSettingCard/>

			<div className="SettingCard">
				<div className="text">
					<SettingCard/>
				</div>
					<SettingCardToggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
			</div>

			<div className="SettingCard2">
				<div className="text2">
					<SettingCard/>
				</div>
					<SettingCardToggle rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
			</div>

			<SettingSocialMedia/>

		</div>

			//<div>
				//<SettingSocialMedia/>
			//</div>


         );
    }

export default App;
