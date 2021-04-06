import React from 'react';
import './Tabs.scss';

export const Tabs = ({onClickHandler, tab}) => {

    return (
        <button className="habitTabIdx"
            onClick={() => onClickHandler(tab)}
        >
            {tab}
        </button>
    )
}
