import React,{useState}  from 'react'

import {Link} from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react'


import {ReactComponent as Logo} from './navbar-logo.svg'

import 'remixicon/fonts/remixicon.css'
import "./navbar.scss"
import NavBadge from "./badge";




const Navbar = () => {



    const [isOpen, setOpen] = useState(false)



    return(
        <>
            <div  className="lg:hidden md:flex sm:flex flex justify-between items-center " >
                <Hamburger toggled={isOpen} toggle={setOpen} />
                {
                    !isOpen ?
                        <div className="flex justify-center mt-2">
                            <Link to="/">
                                <img src="./img/navbar-logo/logo.jpg" alt="AJ_store" className="w-1/2" style={{ width:"100px" , height:"50px" }} />
                            </Link>
                        </div>
                        :
                        null
                }

            </div>
            <nav  className={`w-full flex lg:flex-row md:flex-col sm:flex-col flex-col justify-evenly items-center ${isOpen ? "active" : null} sticky top-0 z-50 bg-white `} id="header">

                <div className="lg:w-2/12 md:w-full sm:w-full w-full flex justify-center mt-2">
                    <Link to="/">
                        <img src="./img/navbar-logo/logo.jpg" alt="AJ_store" className="w-1/2" style={{ width:"200px" , height:"100px" }} />
                    </Link>
                </div>

                <ul className="lg:w-6/12 md:w-full sm:w-full w-full flex lg:flex-row md:flex-col sm:flex-col flex-col lg:justify-evenly md:justify-center sm:justify-center justify-center">
                    <li className="text-center mt-5"> <Link to="/#"> <i className="ri-home-7-line relative top-0.5"/> Home       </Link> </li>
                    <li className="text-center mt-5"> <Link to="/#"> <i className="ri-customer-service-line relative top-0.5"/> Services   </Link> </li>
                    <li className="text-center mt-5"> <Link to="/product"> <i className="ri-shopping-bag-3-line relative top-0.5"/> Products   </Link> </li>
                    <li className="text-center mt-5"> <Link to="/#"> <i className="ri-contacts-line relative top-0.5"/> Contact US </Link> </li>
                    <li className="text-center mt-5"> <Link to="/#"> <i className="ri-information-line relative top-0.5"/> About US   </Link> </li>
                </ul>

                <div className="lg:w-2/12 md:w-full sm:w-full w-full flex justify-center px-10">
                    <button

                        className="mt-3 bg-gray-800  transition duration-300 text-white font-bold py-2 px-4 rounded flex lg:justify-between items-center w-full flex md:justify-center sm:justify-center justify-center">
                            <NavBadge/>
                        <span className="ml-2">
                        Your Cart
                    </span>
                    </button>
                </div>

            </nav>
        </>
    )
}


export default Navbar