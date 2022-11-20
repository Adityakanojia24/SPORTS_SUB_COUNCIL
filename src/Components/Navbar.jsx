import React, {useState} from 'react'
import logo from '../images/logosports.png';
import {Link} from 'react-scroll';
function Navbar() {

    const[nav,setnav]=useState(false);
    const changeBackground = ()=>{
        if (window.scrollY >= 50)
        {setnav(true);  
        }
        else{
        setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ?"nav active":"nav"}>
        <Link to='#' className='logo'smooth={true} duration={1000}>
            <img src={logo} alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='about'smooth={true} duration={1000}>About Us</Link></li>
            <li><Link to='#'smooth={true} duration={1000}>Events</Link></li>
            <li><Link to='#'smooth={true} duration={1000}>Aayaas</Link></li>
            <li><Link to='#'smooth={true} duration={1000}>Team</Link></li>
            <li><Link to='contact'smooth={true} duration={1000}>Contact Us</Link></li>
            {/* <li><Link to='#'>Header</Link></li> */}
        </ul>


    </nav>
  )
}

export default Navbar
