import {
    GET_AUTH,
    START_LOADING,
    STOP_LOADING
} from '../Constants/AuthConstants'


const initialState = {
    userToken:null,
    isLoading:false,
    error:null
}


export default function AuthReducer(state=initialState,action){
    switch(action.type){
        case START_LOADING:
            return {...state,isLoading:true}
        case GET_AUTH:
            return {...state,isLoading:false,userToken:action.payload}
        case STOP_LOADING:
            return {...state,isLoading:false,error:action.payload}
        default:
            return state

    }

}