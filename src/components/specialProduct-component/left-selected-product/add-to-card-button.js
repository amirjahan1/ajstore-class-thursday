import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {PRODUCT_BUY} from "../../../redux/actions/actionTypes";

export default function AddToCardButton() {
    const dispatch =useDispatch()
    const cardInfo  = useSelector((state)=>(state.product.selectedProduct))
    const wwww  = useSelector((state)=>(state.product))
    const navigate =useNavigate()
    const AddToCard=()=>{
        dispatch({
            type:PRODUCT_BUY,
            payload: {
                id: cardInfo.id,
                name: cardInfo.name,
                price: cardInfo.price,
                img: cardInfo.img,
                quantity:1
            }
        })
    }
    return (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={AddToCard}>Add to cart <AddShoppingCartIcon className="mx-2"/></Button>
        </Stack>
    );
}
