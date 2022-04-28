import React from 'react';
import HoverRating from "./rating";



const RightSelectedProduct = ({name,price}) => {

    return(
        <>
                <style jsx>{`
                div#detail-product
                {
                  width: 350px;
                  height: 70vh;     
                }
      
           `}</style>
                <div id="detail-product" className={`bg-gray-600 rounded-lg relative ${ window.innerWidth > 750 ? " -translate-x-20 translate-y-20 transition duration-300" : "-translate-y-8" } flex flex-col justify-evenly items-center`} >
                    <p className="w-full text-2xl font-bold text-white text-center"> Hello User </p>
                    <p className="w-full text-2xl font-bold text-white text-center"> My name is {name} </p>

                    <p className="w-full text-2xl font-bold text-white text-center"> My price is {price} <span className="text-green-900"> $$ </span> </p>

                    <HoverRating />
                </div>
            </>
    )
}


export default RightSelectedProduct;