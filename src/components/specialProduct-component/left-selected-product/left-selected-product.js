import React from 'react';
import AddToCardButton from "./add-to-card-button";

const LeftSelectedProduct = ({img , name}) => {


    return(
        <>
            <style jsx>{`
                div#img-product
                {
                  width: 350px ;
                  height: 70vh;     
                }
      
           `}</style>

            <div id="img-product" className="bg-gray-300 rounded-lg relative" >
                <img src={img} alt={name}/>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <AddToCardButton/>
              </div>
              </div>
        </>
    )
}


export default LeftSelectedProduct;