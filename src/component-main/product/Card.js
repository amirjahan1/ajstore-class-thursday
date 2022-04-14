import React from "react";



const Card = ({item}) => {


    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-5">
            <img className="w-full" src={item.image} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">

                <div className="flex flex-wrap justify-between items-center px-4">

                    <span className="w-4/12">Name:</span>
                    <span className="w-8/12 text-sm">{item.title}</span>

                    <span className="w-4/12">Category:</span>
                    <span className="w-8/12 font-bold">{item.category}</span>

                    <span className="w-4/12">Rating:</span>
                    <span className="w-8/12">

                        <div className="flex items-center">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>

                            <p className="ml-2 text-sm font-bold text-gray-900">{item.rating.rate}</p>

                            <span className="text-sm font-medium text-gray-900 underline hover:no-underline mx-2">{item.rating.count} reviews</span>
                        </div>

                    </span>


                    <span className="w-6/12">Price:</span>
                    <span className="w-6/12 font-bold text-green-600">{item.price}  $</span>



                </div>
            </div>

        </div>
    )
}

export default Card;