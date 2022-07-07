import {SELECTED_PRODUCT,  PRODUCT_BUY, REMOVE_FROM_CART, DELETE_ALL, REMOVE_QUANTITY, ADD_QUANTITY} from './actionTypes';

export const SelectedProduct=(payload)=>
(
    {
        type:SELECTED_PRODUCT,
        payload:payload
    }
)
export const productBuy=(payload)=>
(
    {
        type:PRODUCT_BUY,
        payload:payload
    }
)
export const removeProductFromCart=(payload)=>
(
    {
        type:REMOVE_FROM_CART,
        payload:payload
    }
)
export const deleteAllProductFromCart=()=>
(
    {
        type:DELETE_ALL,
    }
)
export const addQuantity=payload=>
(
    {
        type:ADD_QUANTITY,
        payload:payload
    }
)
export const removeQuantity=payload=>
(
    {
        type:REMOVE_QUANTITY,
        payload:payload
    }
)