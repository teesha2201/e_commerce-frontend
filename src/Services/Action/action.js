// import {Add_To_Cart,Remove_From_Cart} from "../constant";
export const Add_To_Cart = "Add_To_Cart"
export const Remove_From_Cart = "Remove_From_Cart"

export const addToCart = (data)=>{
    console.warn("Data from User Props:" ,data)
    return{
        type: Add_To_Cart, //type of action export in reducer
        data:data //data import in reducer
    }
}
export const removeFromCart = (data) =>{
    return{
        type : Remove_From_Cart,
        // data:data
    }
}