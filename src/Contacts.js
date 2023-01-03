import React from 'react'
import "./Contacts.css"
import {FiPhoneCall} from "react-icons/fi"
import {TfiEmail, TfiLocationPin} from "react-icons/tfi"
import {GrMapLocation} from "react-icons/gr"
import IconCard from './IconCard'


const Contacts = () => {
  
  return (
    
    <section className='Contacts__section' id='Contacts_id'>
      <h1 className='Contacts__title'>Contacts</h1>
      <div className='Contacts__container'>
      <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=via%20stella%2065,%20naples&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      <form className="form" action = "https://formspree.io/f/xoqbwqqg" method = "POST">
        <h3 className='Contacts__Form-title'>Message Me</h3>
        
        
        <input type="text" placeholder ="Full Name" name = "Name" required></input>
        <input type="email" placeholder ="Email" name = "Email" required></input>
        <textarea placeholder = "Type Message" name = "Message" required></textarea>
        <button type= "submit" className = "submit">Send</button>

      </form>
      </div>
      <div className='Contacts__icons'>

      
        <IconCard 
          title = "Location"
          text = "Via Stella 65"
          icon={<TfiLocationPin />} 
        />
        
        <IconCard 
          title = "Email"
          text = "ivanjunior80674@gmail.com"
          icon={<TfiEmail />} 
        />

        <IconCard 
          title = "Phone"
          text = "+39 3515405209"
          icon={<FiPhoneCall />} 
        />
      

      </div>
    </section>
  )
}



export default Contacts