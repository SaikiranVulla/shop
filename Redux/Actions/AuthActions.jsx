
import { GET_AUTH, START_LOADING, STOP_LOADING } from "../Constants/AuthConstants";


export const postUsers=(credentials)=>{
    return async (dispatch)=>{
        console.log("up here ??")
        dispatch({type:START_LOADING})
        try{
            fetch('https://fakestoreapi.com/auth/login',
                {
                    method:'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body:JSON.stringify(credentials)
                }
            )
            .then((res) => res.json())
            .then((data)=> {
                console.log("data >>",data)
                dispatch({type:GET_AUTH,payload:data})
            })
        }catch(error){
            dispatch({type:STOP_LOADING,payload:error.message})
        }

    }
}