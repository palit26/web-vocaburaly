import {USER_LOGIN} from '../action/Type'
export default (state=[],action)=>{
    switch (action.type) {
        case USER_LOGIN:
            localStorage.setItem('token',action.payload.token)
            return action.payload;
        default:
            return state;
    }
}