import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import {Link} from "react-scroll";



const Navbar = () => {
  return (
    <>
      

        <nav className='nav__container'>
            <Link  to = "/" className="nav__title" spy={true} smooth={true} offset={-100} duration={800}>My Dentist</Link>

            <ul>

            <Link to = "About_id" spy={true} smooth={true} offset={-100} duration={800}>About Me</Link>
            <Link to = "Services_id" spy={true} smooth={true} offset={-100} duration={800}>Services</Link>
            <Link to = "Contacts_id" spy={true} smooth={true} offset={-100} duration={800}>Contacts</Link>

            </ul>
        </nav>

    </>
  )
}

export default Navbar 



