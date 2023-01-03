import React from 'react'
import "./IconCard.css"


const IconCard = ({text, title, icon}) => {
  return (
    <div className='Icon__description'>
        <div className='Icon__Container'>{icon}</div>
        <p className='bobby'>{title}</p>
        <p className='bobbyW'>{text}</p>

    </div>
  )
}

export default IconCard

