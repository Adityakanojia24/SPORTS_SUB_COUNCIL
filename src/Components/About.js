import React from 'react';
import aboutimage from '../images/aboutus.JPG';

const About= () => {
  return (
    <div id='about'>
       <div className= 'about-image'>
           <img src= { aboutimage } alt=''/>
      </div>  
       <div className='about-text'>
         <h1>SPORTS SUB COUNCIL</h1>
           <p> 
           Sports Sub Council of CSA is responsible for conducting and managing all sports and games activities 
           organized for/by the students in the campus. Aayaas, Universitys annual sports meet, is one of the major 
           events coordinated by this Sub Council. Besides, the Sub Council also organizes sports activities such as Smash, 
           Inter Branch Tournaments, International Yoga Day etc. to motivate and energize the students.   </p>
      </div>
    </div>
  )
}

export default About;