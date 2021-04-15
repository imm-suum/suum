import React, { useEffect, useState, createRef } from "react";
import "../app.css";
import "../scss/main.scss";
import axios from "axios";
import lottie from "lottie-web";
import plantAnimation from "../assets/plant3.json";
import { HabitTabWidget } from "../components/HabitTabWidget/HabitTabWidget.js";
import DateTime from "../components/DateTime/DateTime.jsx";
import CheckInModal from "../components/checkInModal/checkinModal";
import { WeeklyReviewCard } from "../components/WeeklyReviewCard/WeeklyReviewCard.js";
import { PlanningModal } from "../components/PlanningModal/PlanningModal.js";

//A Class that holds all components for Habit Nursery Screen

//this component will hold all view state
// fecth all habits.
//make all components dark mode as well.

///habitTab1 is checked && dispalay component
//

export const Home = () => {
  let anim;

  const currentTime = new Date();
  // get API response.

  const [todayHabits, setHabits] = useState([]);
  const [todayTip, setTodayTip] = useState([]);

  useEffect(() => {
    async function getHabits() {
      // fetch data from a url endpoint
      const getHabit = await axios.get("/api/habit").then((response) => {
        setHabits(response.data);
      });
      const getTipofDay = await axios.get("/api/tips").then((response) => {
        setTodayTip(response.data);
      });
    }
    getHabits();

    anim = lottie.loadAnimation({
      container: plantAnimationDiv.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: plantAnimation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  console.log(todayHabits);
  //console.log(todayTip);
  let plantAnimationDiv = createRef();

  const playAnimation = () => {
    anim.playSegments([0, 165], true);
    //loopAnimation();
    console.log("playing");
  };

  const loopAnimation = () => {
    anim.playSegments([139, 165], false);
  };

  const dateTimePadding = {
    paddingLeft: "2rem",
    paddingTop: "2rem",
  };

  console.log(currentTime.getDay());

  //tracking the modals below
  let checkInTime = false;
  let weeklyTime = false;

  if (currentTime.getHours() > 20 && currentTime.getDay() != 0) {
    //if night time show checkin process. 20(8pm) && not 0( everyday but sunday)
    checkInTime = true;
  } else if (currentTime.getHours() < 9 && currentTime.getDay() === 0) {
    //if Sunday Night to show weekly report. 9(9am) && 0 (sunday)
    weeklyTime = true;
  }

  return (
    <div>
      {checkInTime ? <CheckInModal todayHabits={todayHabits} /> : null}
      {weeklyTime ? <WeeklyReviewCard /> : null}

      <div style={dateTimePadding}>
        <DateTime date={new Date()} />
      </div>

      {todayHabits.length && todayTip.length ? (
        <HabitTabWidget
          todayHabits={todayHabits}
          playAnimation={playAnimation}
          tipOfDay={todayTip}
        />
      ) : (
        <PlanningModal />
      )}
      <div className="plantAnimationDiv" ref={plantAnimationDiv} />
    </div>
  );
};
