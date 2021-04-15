import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import './NoHabitsWidget.scss';

export const NoHabitsWidget= ({tipOfDay}) => {

	// state={
	// 	showInfo:false
	// }
	const [showInfo, setShowInfo] = useState(false);

	const handleToogle=()=>{
		setShowInfo(!showInfo);
	};


		//GET Array of Tips
		//Run Random function = return 1
		//smake response a variable
		console.log(tipOfDay);

	return(

		<div className="noHabitsContainer">


			<div className="accordion">
				<div className="single_accordion">
					<div className="tab" onClick={handleToogle}>
						{/* return content.contentTitle */}
						<p>{tipOfDay.contentTitle}</p>
					</div>
					{/* edit CSS selectors for merge */}
					<div className="container2 bg-maingreen">
						<div className={showInfo? 'showContent content' : 'content' }>
							<div className="textbox">
								{/* return random tip content in p tag */}
								<p>{tipOfDay.content}</p>
								{/* return tip URL anchor tag href*/}
								<a href={tipOfDay.contentLink} className="readMoreLink">Read More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
