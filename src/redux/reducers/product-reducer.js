import {SELECTED_PRODUCT,PRODUCT_BUY,REMOVE_FROM_CART,DELETE_ALL,REMOVE_QUANTITY,ADD_QUANTITY} from '../actions/actionTypes'




const initialState =({
    selectedProduct: {},
    productsBuy: [],
})


const ProductReducer=(state=initialState, action)=>
{
     switch (action.type){
        case SELECTED_PRODUCT:
            return{
            ...state,
            selectedProduct: action.payload
            }
         case PRODUCT_BUY:
             return{
                 ...state,
                 productsBuy: state.productsBuy.some((item)=>item.id===action.payload.id) ?
                    state.productsBuy.map((item)=>
                        item.id===action.payload.id
                            ?
                            {...item,quantity:item.quantity+1}
                            : item)
                     : [...state.productsBuy,action.payload]
             }
         case REMOVE_FROM_CART:
             return{
                 ...state,
                 productsBuy: state.productsBuy.filter(product=>product.id!==action.payload)
             }
         case DELETE_ALL:
             return{
                 ...state,
                 productsBuy:[]
             }
         case ADD_QUANTITY : return {...state , productsBuy: state.productsBuy.map((item)=>{
                 if(item.id === action.payload){
                     item.quantity += 1
                     // item.totalPrice = item.quantity * item.price
                 }
                 return item
             })}
         case REMOVE_QUANTITY : return {...state , productsBuy: state.productsBuy.map((item)=>{
                 if(item.id === action.payload){
                     item.quantity -= 1
                     // item.totalPrice = item.quantity * item.price
                 }
                 return item
             })}
        default:
            return state
    }

}

export default ProductReducer