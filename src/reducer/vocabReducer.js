import {CREATE_WORD,LIST_WORD,DELETE_WORD,WORD_FETCH} from '../action/Type'

export default (state=[],action )=>{
    switch (action.type) {
        case CREATE_WORD:
            
            return action.payload;
        case  LIST_WORD:
            return action.payload;
        case  DELETE_WORD:
            return action.payload;
        case WORD_FETCH:
            return action.payload
        default:
            return state;
    }
}