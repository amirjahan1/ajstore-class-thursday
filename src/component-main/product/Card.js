import React from "react";
import 'animate.css';
import "./card.css"


const Card = ({item}) => {


    return(
        <div className="animate__animated animate__fadeIn card rounded-xl  m-10 h-auto  flex flex-col justify-between items-center cursor-pointer">
                <div className="bg-gray-300 rounded-t-xl">
                    <img src={item.img}  alt="Aj store"/>
                </div>

            <div  className="inner-card w-full border-t-2  pt-5 flex flex-wrap justify-between items-center border-b-4 border-indigo-500 pb-4 rounded-b-xl relative
             bg-gray-300 -top-20  "
                  style={{fontFamily:'abel' , boxShadow:'0px 0px 3px #292a36'}}>


                {/*Fname*/}
                <p className="w-6/12 font-bold text-lg text-yellow-600 pl-3">
                    First Name:
                </p>
                <p className="w-6/12  font-bold text-sm text-orange-600 pl-3">
                    {item.first_name}
                </p>

                {/*Lname*/}
                <p className="w-6/12 font-bold text-lg pl-3 text-blue-600 mt-4">
                    Last Name:
                </p>
                <p className="w-6/12  font-bold text-sm pl-3 text-indigo-700 mt-4">
                    {item.last_name}
                </p>

                {/*Price*/}
                <p className="w-6/12 font-bold text-lg pl-3 text-red-600 mt-4">
                    Price:
                </p>
                <p className="w-6/12  font-bold text-sm pl-3 mt-4 flex items-center">
                   <span className="text-green-800 text-xl"> {item.price} </span>
                   <span className="text-green-900 text-2xl"> $ </span>
                </p>


                <div className="w-full   mt-2 px-4  flex flex-wrap justify-between items-center ">
                    <span style={{boxShadow:'0px 1px 1px #292a36'}}
                       className="bg-indigo-500 hover:bg-indigo-700 text-white  cursor-pointer rounded inline-flex items-center justify-center px-4 py-2 w-full transition ease-in-out  duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                        More
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;