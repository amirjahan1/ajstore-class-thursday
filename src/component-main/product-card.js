import React from 'react'
import MediaCard from "../components/product-card/card";
import { useSelector , useDispatch } from "react-redux"
import {DELETE_ALL} from "../redux/actions/actionTypes";

export default function ProductCard(){
    const dispatch = useDispatch()
    const productBuy = useSelector((state)=>state.product.productsBuy)
    return(<>
        <button className="bg-red-300 p-5 text-red-700" onClick={()=>dispatch({type: DELETE_ALL})}>
            Delete All
        </button>
        <div className="flex justify-between flex-wrap">
        { productBuy &&
            productBuy.map((item)=>(
                <MediaCard key={item.id} items={item} />
            ))

        }
        </div>
    </>)
}