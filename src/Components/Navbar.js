import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Assets/Logo'
import './Navbar.css'



function Navbar() 
{
    const [open,setOpen] = useState(false);

    const toggleBurger = ()=>{
        setOpen(!open); 
    }

    return (
        <nav className="navigation">
                <div className="logo" >
                    <NavLink to='/'>
                    <Logo />
                    </NavLink>
                </div>
                <ul className={open?'nav-links nav-active ':'nav-links'}>
                    <li  style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>Home</NavLink>
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/team'>Team</NavLink>
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to='/event'>Event</NavLink>
                    </li>
                    <li style={open?{animation:'navLinkFade 0.3s ease forwards 0.4s '}:{}}>
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to='/faculty'>Faculty's Bureau</NavLink>
                    </li>
                </ul>
                <div className={open?'burger toggle':'burger'} onClick={toggleBurger}  >
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>   
        </nav>
    )
}

export default Navbar

