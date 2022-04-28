import React from "react";
import {useParams} from "react-router-dom";



const SpecialProduct=()=>
{
        const param = useParams();

    return(
        <>
            <h1 className="text-3xl text-center font-bold my-20">My name is {param.name} </h1>
        </>

)}

export default SpecialProduct;