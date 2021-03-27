import React from 'react';

export const Tabs = ({onClickHandler, tab}) => {

    return (
        <button 
            onClick={() => onClickHandler(tab)}
        >
            {tab}
        </button>
    )
}