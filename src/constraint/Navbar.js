import React from 'react'
import './navbar.css'
import { Sling as Hamburger } from 'hamburger-react'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_wrapper">
                <div className='logo'>
                    <h2>Abdul jabbar</h2>
                </div>
                <div id='ham'><Hamburger style={{ fontSize: '10px' }} /></div>
                <div className='nav_list'>
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">service</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
