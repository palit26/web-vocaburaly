import axios from 'axios'
import {USER_LOGIN} from './Type'
export const login =(value)=>{
    return dispatch =>{
       axios.post('http://localhost:3001/login',value)
            .then(res=>{
                console.log(res.data);
                dispatch ({type:USER_LOGIN,payload:res.data})
            }) 
    }
    
}