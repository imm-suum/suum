//this can be reused for other components like modals**

import React from 'react';
import './Backdrop.scss';

export const Backdrop = props => (
    <div className="backdrop" onClick={props.click}></div>
)
