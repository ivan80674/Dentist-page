import React from 'react'
import "./About.css"
import selfie from "./nigselfie.jpg"


const About = () => {
  return (
    <section className='About__section' id='About_id'>
    <h1 className='About__title'>About Me</h1>

    <div>
      <img src= {selfie}  className= "selfie"  alt='Dentist-selfie'  />
    </div>
    

   
    
    
    <div className='About__container'>
      <h2>My story</h2>
      <br/>
    
      <p>
        Tristique nulla aliquet enim tortor at. Pellentesque elit ullamcorper dignissim cras tincidunt. Leo duis ut diam quam nulla porttitor. Et magnis dis parturient montes nascetur ridiculus. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. 
      
        <br /><br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices. Commodo ullamcorper a lacus vestibulum sed. Facilisis sed odio morbi quis commodo odio.<br /><br />
         Sem nulla pharetra diam sit amet.
       
        

      </p>

    </div>

    
    </section>
  )
}

export default About
