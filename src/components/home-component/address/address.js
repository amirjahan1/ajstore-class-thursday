import React from 'react';





const Address = () => {


    return(
        <div className="w-full my-10 py-3 bg-blue-800 flex flex-wrap justify-between px-5">


            <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full p-3  text-gray-700">
                    <ul className="pl-4 bg-white h-full rounded">
                        <li className="py-4">
                            <span className="font-bold">
                                Address:
                            </span>
                            <span className="ml-2 italic">
                                Iran, Tehran
                            </span>
                        </li>
                        <li className="py-4">
                            <span className="font-bold">
                                City:
                            </span>
                            <span className="ml-2 italic">
                                Tehran
                            </span>
                        </li>
                        <li className="py-4">
                            <span className="font-bold">
                                Number:
                            </span>
                            <span className="ml-2 italic underline">
                                <a href="tel:09011497157"> 09011497157</a>
                            </span>
                        </li>
                        <li className="py-4">
                            <span className="font-bold">
                                Email:
                            </span>
                            <span className="ml-2 underline">
                                <a href="mailto:amirjahan454@gmail.com">
                                amirjahan454@gmail.com
                                    </a>
                            </span>
                        </li>
                    </ul>
            </div>


            <div className="lg:w-6/12 md:w-6/12 sm:w-full w-full p-3">
                <div className="bg-white rounded flex flex-col justify-evenly items-center h-full">
                    <h1 className="text-center font-bold text-2xl mt-3 text-gray-700">About me</h1>
                    <span className="text-center italic lg:text-xl md:text-lg sm:text-base text-sm mt-10 text-gray-700 px-5">I'm Amir Jahan Full-stack developer and you can download my CV</span>
                    <button className="bg-blue-500 shadow-lg shadow-blue-500/50 w-6/12 py-3 rounded text-white font-bold my-10">Download CV</button>
                </div>
            </div>

        </div>
    )
}

export default Address;