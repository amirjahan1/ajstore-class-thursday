import React from 'react';
import './navbar.css';


const Navbar = () => {

    return(
        <nav id="header-nav" style={{backgroundColor:'red'}}>
            <div id="header-logo">LOGO</div>


                <ul id="navbar">
                    <li>Home</li>
                    <li>News</li>
                    <li>Product's</li>
                    <li>Service</li>
                    <li>About US</li>
                </ul>

            
            
            <div id="header-btn">BUTTON</div>
        </nav>
           )
}


export default Navbar;