import React from 'react';
import './Tabs.scss';
import leafIcon from '../../assets/leafIcon.svg'

export const Tabs = ({onClickHandler, tab}) => {

    return (
        <button className="habitTabIdx"
            onClick={() => onClickHandler(tab)}
        ><img src={leafIcon}></img>

        </button>
    )
}
