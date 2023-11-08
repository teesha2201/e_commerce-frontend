import React from "react";
import "../Style/User.css"
// User as Home
function AddToCart(props){
    console.warn("Props in Add TO CART:",props.data)  //comes  data from UserContainer

    return(
        <div>
            <div className="Add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                {/* no.of item in cart */}
                <span>{props.data.length}</span>
            </div>
        </div>
    )
}  
export default AddToCart 