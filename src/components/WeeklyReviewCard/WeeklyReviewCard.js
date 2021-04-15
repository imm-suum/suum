import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './WeeklyReviewCard.scss';
import tree from '../../assets/tree.svg';
import axios from 'axios';
import { HabitCheckItem } from '../HabitCheckList/HabitCheckItem';

export const WeeklyReviewCard = ()=> {
  const [isToggled, setIsToggled] =  useState(true);
  const [cardTitle, setCardTitle] =  useState("This Week's Plant");
  const [containerContent, setContainerContent] = useState(
    <img src={tree}></img>
  );
  const [btnContainerContent, setBtnContainerContent] = useState("");
	const [isOpen, setisOpen] = useState(true);
  const [myCompletedHabits, setMyCompletedHabits] = useState({});

  useEffect(() => {

		async function getCompleteHabits() {

			// fetch data from a url endpoint
			const getCompletedHabits = await axios.get('/api/report/week')
				.then(response => {
          console.log(response.data.habits)
					setMyCompletedHabits(response.data.habits);
				});

		}
		getCompleteHabits();
	}, []);

  console.log(myCompletedHabits);

  //define the ternary operator
  let newContentArray=[];
  let newContent;
  {myCompletedHabits.length > 0 ?

    myCompletedHabits.map((item,idx)=>{
        newContent = <div className="myCompletedHabit">
          <div className="completeIcon" ><div></div></div>
          <p>{myCompletedHabits[idx].habitName}</p>
          </div>
        
        newContentArray.push(newContent);
    })
    
    :

    <p>LOADING.....</p>
  }



  //function to set state true to false etcetc;
  const flipReport= ()=>{
    setIsToggled(!isToggled);
    setCardTitle("Completed Tasks");
    setContainerContent(newContentArray);
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
            <div style={{width: `calc(${myCompletedHabits.length}/21*100%)`}} className="progressBar">
            <p className="progressNum">{myCompletedHabits.length}/21</p>
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
