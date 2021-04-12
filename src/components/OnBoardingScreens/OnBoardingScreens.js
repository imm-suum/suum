import React, { useState } from 'react';
import OnBoardingScreens1 from './OnBoardingScreens1.js';
import OnBoardingScreens2 from './OnBoardingScreens2.js';
import OnBoardingScreens3 from './OnBoardingScreens3.js';
import OnBoardingScreens4 from './OnBoardingScreens4.js';
import './OBScreen.scss';
var count = 1;

function OnBoardingScreens(){
	const slide = {
		slide1:<OnBoardingScreens1/>,
		slide2:<OnBoardingScreens2/>,
		slide3:<OnBoardingScreens3/>,
		slide4:<OnBoardingScreens4/>
	}


	const [activeSlide, setActiveSlide] = useState(OnBoardingScreens1);

	const onClickHandler = () => {

	if(count < 4){
		count += 1;
		var combine = "slide" + count;
		console.log(combine);
		console.log(slide[combine]);
			setActiveSlide(slide[combine]);
	}
    }

	return(
		<div className='OnBoardingContainer'>
			{activeSlide}
			<button className="next" onClick={() => onClickHandler()}>
			Proceed
			</button>
		</div>
	);
}

export default OnBoardingScreens;
