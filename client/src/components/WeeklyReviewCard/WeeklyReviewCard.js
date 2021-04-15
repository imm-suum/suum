import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './WeeklyReviewCard.scss';
import tree from '../../assets/tree.svg';
import axios from 'axios';

export const WeeklyReviewCard = ()=> {
  const [isToggled, setIsToggled] =  useState(true);
  const [cardTitle, setCardTitle] =  useState("This Week's Plant");
  const [containerContent, setContainerContent] = useState(
    <img src={tree}></img>
  );
  const [btnContainerContent, setBtnContainerContent] = useState("");

	const [isOpen, setisOpen] = useState(true);

  //function to set state true to false etcetc;
  const flipReport= ()=>{
    setIsToggled(!isToggled);
    setCardTitle("Completed Tasks");
    setContainerContent("list of tasks will be here");
    setBtnContainerContent(<Button color="yellow" size={"lg"} handleClick={closeReport}>Great Job!</Button>);
  }

  const closeReport = (e)=> {
    if (e.target.id = 'greatJobBtn'){
	setisOpen(!isOpen);
	  console.log('closed')
    }else{
      console.log("u dumbo oldhead");
    }
  }

  return(
	  <>
	 {isOpen &&
	<div className="weeklyScreenBg">
      <div className="reportBg" onClick={flipReport}>

        <div className="reportTitle">
          <h2>{cardTitle}</h2>
          <div className="barContainer">
            <div className="bar">
            <p className="num">14/21</p>
            </div>

          </div>
        </div>

        <div className="plantContainer">
          {containerContent}
        </div>

        <div className="btnContainer">
          {btnContainerContent}
        </div>

      </div>
    </div>
	}
	</>
  );
}
