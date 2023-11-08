// import {Add_To_Cart,Remove_From_Cart} from "../constant";

import {Add_To_Cart,Remove_From_Cart} from "../Action/action"
const initialState = {
    cardData :[] //items to store in cart
}

function cardItems(state = [initialState] , action){
    switch(action.type){
        case Add_To_Cart :{
            // console.warn("Reducer's data  comes from action file:",action)
            return [ 
                ...state,
                {cardData : action.data}
            ]
        }
        
        case Remove_From_Cart:{
            state.pop();
            return [
                ...state,
                // {cardData:action.data}
            ]
        }
        default :
            return state
    }
}
export default cardItems
// import in rootReducer