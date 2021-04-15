import React, { useState, useEffect } from 'react';
import './HabitNurseryTag.scss';


export const HabitNurseryTag = ({habitTagClick, text })=> {

	// /const [tagContent] = useState(props.tagContent);

	return (
		<button className="habitTag" onClick={habitTagClick}> {text}</button>
	);
}

