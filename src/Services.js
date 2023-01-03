import React from 'react'
import Card from './Card'
import "./Services.css"

const Services = () => {
  return (
    
    <section className='Services__section' id='Services_id'>
      <h1 className='Services__title'>What Do I Offer</h1>
      <p className = "Services__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices.
        Tristique nulla aliquet enim tortor at. Pellentesque elit ullamcorper dignissim cras tincidunt. Leo duis ut diam quam nulla porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore tempor orci  ultrices.
      </p>

      <div className = "Services__container">
      <Card 
      
        
        title = "Title here"
        text = "<Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices."
        imageUrl = "https://media.istockphoto.com/id/489865490/photo/teeth-checkup-at-dentists-office-dentist-examining-girls-teeth.jpg?b=1&s=170667a&w=0&k=20&c=AZC-Zlhw00FMKRQM8O-OM93KvvGjSFs9mpnkb51Wt_w="
      

      />

    <Card 
      
        
      title = "Title here"
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices."
      imageUrl = "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbnRpc3QlMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    

    />

    <Card 
      
        
      title = "Title here"
      text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices."
      imageUrl = "https://media.istockphoto.com/id/1349440986/photo/senior-asian-woman-having-a-virtual-appointment-with-doctor-online-consulting-her.jpg?b=1&s=170667a&w=0&k=20&c=6EsoWuUasK7f82mEU1_9YFL5sHSNIEmSAK1pcR7d9MY="
    

    />
    </div>

    </section>
 
  )
}

export default Services
