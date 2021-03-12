import React, { useState, useRef, useEffect } from 'react'
import './NoHabitsWidget.css';

const NoHabitsWidget = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleActive = () => {
    setActive(!active)
  }

  const titleStyle = {
    fontWeight: 600,
    fontSize: '14px',
  }

  return (
    <div className="accordion-section">
      <button className="accordion-title" onClick={toggleActive}>
        <p style={titleStyle}>{props.title}</p>
        <span className={active ? 'accordion-icon rotate': 'accordion-icon'}>
          >
        </span>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
      >
        {props.children}
      </div>
    </div>
  )
}

export default NoHabitsWidget;
