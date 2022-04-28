import {combineReducers} from 'redux'

import ProductReducer from './product-reducer';


export const rootReducer = combineReducers({
    product: ProductReducer
})