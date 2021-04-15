import React, { useState, useEffect } from 'react';
import './HabitNurseryTag.scss';


export const HabitNurseryTag = (props)=> {

	// /const [tagContent] = useState(props.tagContent);

	return (
		<button className="habitTag" onClick={props.habitTagClick}>{props.children}</button>
	);
}

