import React from 'react';

export const NewHabitTabWidget = ({onClickHandler, tab}) => {

    return (
        <button 
            onClick={() => onClickHandler(tab)}
        >
            {tab}
        </button>
    )
}