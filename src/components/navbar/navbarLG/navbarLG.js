import React,{useState}  from 'react'


import {ReactComponent as Logo} from '../navbar-logo.svg'

const NavbarLG = () =>
{
    const [logoHover, setLogoHover] = useState(false)


    return(
        <nav className="w-full flex justify-evenly items-center">

            <div className="w-2/12">
                <img src="./img/navbar-logo/logo.jpg" alt="" className="w-1/2" />
            </div>

            <ul className="w-8/12 flex justify-evenly">
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>About US</li>
                <li>Contact US</li>
            </ul>


            <div className="w-2/12">
                <button
                    onMouseEnter={()=>setLogoHover(true)}
                    onMouseLeave={()=>setLogoHover(false)}
                    className="mt-3 bg-gray-800 hover:bg-blue-900 transition duration-300 text-white font-bold py-2 px-4 rounded flex justify-between items-center">
                    {
                       logoHover ?
                           <img src="./img/navbar-logo/logo.gif" style={{ height:'40px'}} />
                           :
                           <Logo style={{ height:'40px'}}/>
                    }
                    <span className="ml-2">
                        Your Cart
                    </span>
                </button>
            </div>

        </nav>
    )
}

export default NavbarLG

