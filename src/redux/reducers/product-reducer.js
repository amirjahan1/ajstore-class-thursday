import {SELECTED_PRODUCT} from '../actions/actionTypes'



const initialState =({
    selectedProduct: {},
})


const ProductReducer=(state=initialState, action)=>
{

     switch (action.type){
        case SELECTED_PRODUCT:
            return{
            ...state,
            selectedProduct: action.payload
            }

        default:
            return state
    }

}

export default ProductReducer