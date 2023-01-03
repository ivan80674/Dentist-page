import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { WhatsappIcon, WhatsappShareButton,FacebookIcon,FacebookShareButton,LinkedinIcon, LinkedinShareButton,TelegramIcon,TelegramShareButton } from "react-share";

const Footer = () => {
  return (
  
      <footer className='footer'>
        <div className='container-footer'>
        <div className='row'>
          <div className='footer-col'>
            <h4>Company</h4>

            <ul className='Footer__ul'>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Privacy Policy</li>
              <li>Affiliate Program</li>
            </ul>

          </div>

          <div className='footer-col'>
            <h4>Get Help</h4>

            <ul className='Footer__ul'>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Order Status</li>
              <li>Payment Options</li>
            </ul>

          </div>

          <div className='footer-col'>
            <h4>Social Media</h4>
            <div className='social-links'>
              <ul className='Footer__ul'>
                
                <li>
                  <WhatsappShareButton
                  url='https://wa.me/+393515405209'>

                    <WhatsappIcon  round={true} logoFillColor="white"  size={20}/>
                  </WhatsappShareButton>
                </li>
                <li>
                  <FacebookShareButton
                  url='https://fb.me/dilafernando'>

                    <FacebookIcon  round={true} logoFillColor="white"  size={20}/>
                  </FacebookShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                  url='https://it.linkedin.com/in/marco-onnembo-7b4ba7143/en'>

                    <LinkedinIcon  round={true} logoFillColor="white"  size={20}/>
                  </LinkedinShareButton>
                </li>
                <li>
                  <TelegramShareButton
                  url='https://telegram.org'>

                    <TelegramIcon  round={true} logoFillColor="white"  size={20}/>
                  </TelegramShareButton>
                </li>
           
              </ul>

            
          
            </div>


          </div>
          
        </div>
      </div>
      <hr />

      <div className= "Footer__Copyright">
            <p>
              &copy;2022 My Dentist INC | All rights reserved | Terms of Service | Privacy
            </p>
          </div>
    </footer>

    
  )
}


export default Footer




