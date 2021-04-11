import React from 'react';

export const Tabs = ({onClickHandler, tab}) => {

    return (
        <button className="habitTabIdx"
            onClick={() => onClickHandler(tab)}
        >
            {tab}
        </button>
    )
}
