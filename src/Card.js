import React from 'react'
import "./Card.css"

 const Card = ({text, title, imageUrl}) => {
  return (
    <div className='Card__container'>
      
      <div className='Card__image'>

        <img src={imageUrl} alt=""  className='img1'/>

      </div>

      <div className='Card__content'>

          <h3 className='Card__title'>{title}</h3>

          <p>{text}</p>
      
      </div>
    </div>
  )
}

export default Card
