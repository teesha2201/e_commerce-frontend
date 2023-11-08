import React from "react";
import "../Style/User.css"
import { Outlet } from "react-router-dom";
// User as Home
function User(props){
    console.warn("Props in User#User:",props.data)  //comes  data from UserContainer
    console.log(props)
    return(
        <>
        <div className="Main-Wrapper">
            <h1>User</h1>
            <div className="Add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>{props.data.length}</span>
            </div>
            <div className="cart-wrapper">
               
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSwrqlcWAGAEt3gD-FuYCXvtdCsoOdPQ1wQn5mNZpS9Vsz2HhQlM-Bo4VVZYD6cCpF-qCU9zfEAKaxb64cWneu3hpOa6rsJFvGRslF3ziw&usqp=CAE" alt="Not Found"/>
                </div> 
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                         Price: 1000.00 Rs
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                    props.addToCartHandler({price:1000 , name: 'iphone 11 pro'})
                }>Add To Cart</button>
                <br/>
                <button onClick={()=>
                    props.removeToCartHandler()} style={{color:"white",backgroundColor:"skyblue"}}>Remove item from Cart</button>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
export default User