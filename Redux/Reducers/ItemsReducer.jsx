import React from 'react'
import { FETCH_CART_ITEMS_REQUEST,GET_CART_ITEMS,FETCH_CART_ITEMS_FAILURE,GET_PARTICULAR_ITEMS } from '../Constants/CartItemConstants'


const initialState ={
    cartItem:[],
    page:1,
    isLoading:false,
    error:null,
    particularItem:{}
}


export default function ItemsReducer(state  =initialState,action){
    switch(action.type){
        case FETCH_CART_ITEMS_REQUEST:
            return {...state,isLoading:true,error:null}
        case GET_CART_ITEMS:
            return {...state,isLoading:false,cartItem:action.payload}
        case FETCH_CART_ITEMS_FAILURE:
            return {...state,isLoading:false,error:action.payload}
        case GET_PARTICULAR_ITEMS:
            return {...state,isLoading:false,particularItem:action.payload}
        default:
         return state
    }
}
