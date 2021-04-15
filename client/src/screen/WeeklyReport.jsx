import React, { useState, useEffect } from 'react';
import '../app.css';
import {WeeklyReviewCard }from '../components/WeeklyReviewCard/WeeklyReviewCard';



//A Class that holds all components for WeeklyReport Screen

function WeeklyReport() {

    return (

        //add imported classes here
        //always have div to place component notes
        <div>

            <WeeklyReviewCard/>


        </div>

    );


}

export default WeeklyReport;
