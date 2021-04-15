import React, { useState , useEffect } from 'react';
import './PastPlantWidget.scss';
import tree from '../../assets/tree.svg'

export const PastPlantWidget= ()=>{
		
		const [isToggled, setIsToggled] = useState(true);
	    
	  const handleClick= ()=>{
			setIsToggled(!isToggled);
	  }
		
	    return (
	      <div className="card" onClick={handleClick}>
					<img className="pastPlant" src={tree}></img>

					<h1 className="pastPlantTitle">
						{isToggled ? 'Jan 01 ~ 07' : ''}
					</h1>

					<p className="progress">
						{isToggled ? '' : '14/21 Habits'}
					</p>

					<div className="bar-container">
					<div className="bar">14/21</div>
					</div>

		  	</div>
	    );
	}
