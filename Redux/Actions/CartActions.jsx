import { FETCH_CART_ITEMS_FAILURE,FETCH_CART_ITEMS_REQUEST, GET_CART_ITEMS, GET_PARTICULAR_ITEMS } from "../Constants/CartItemConstants";


export const fetchCartItem=()=>{
    return async (dispatch) => {
        dispatch({type:FETCH_CART_ITEMS_REQUEST})
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            dispatch({type:GET_CART_ITEMS,payload:data})
        }catch(error){
            dispatch({type:FETCH_CART_ITEMS_FAILURE,payload:error.message})
        }
    }
}

export const fetchParticularItem=(id)=>{
    return async (dispatch) => {
        dispatch({type:FETCH_CART_ITEMS_REQUEST})
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            console.log(response,"response>>>")
            const data = await response.json()
            dispatch({type:GET_PARTICULAR_ITEMS,payload:data})
        }catch(err){
            dispatch({type:FETCH_CART_ITEMS_FAILURE,payload:err.message})

        }
    }
}