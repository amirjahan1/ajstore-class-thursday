import React from "react";
// import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import LeftSelectedProduct from "../components/specialProduct-component/left-selected-product/left-selected-product";
import RightSelectedProduct from "../components/specialProduct-component/right-selected-product/right-selected-product";

import "../components/specialProduct-component/special-product-selected.scss"
const SpecialProduct=()=>
{
        // const param = useParams();
       // console.log(param.name)
        const selectedProduct = useSelector(state=>state.product.selectedProduct)


    return(
        <>
            {
                window.innerWidth > 750 ?
          <div  className="flex justify-center items-center my-32">
              <div id="product-box" className="flex justify-center items-center ">
                    <LeftSelectedProduct  img={selectedProduct.img} name={selectedProduct.name}/>
                    <RightSelectedProduct name={selectedProduct.name} price={selectedProduct.price}/>
              </div>
          </div>
:
            <div  className="grid grid-cols-1 justify-items-center my-32">
                    <LeftSelectedProduct  img={selectedProduct.img} name={selectedProduct.name}/>
                    <RightSelectedProduct name={selectedProduct.name} price={selectedProduct.price}/>
            </div>
            }
        </>

)}

export default SpecialProduct;