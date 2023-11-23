import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import AddFooter from "../Component/Footer";
import "../Style/AddtoCart.css"
import { useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';

const AddtoCart = () => {
 const navigate= useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Cart.cart);
  console.log("Add to cart :",data);

  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

  //payment integration
  const makePayment = async ()=>{
    const stripe = await loadStripe("pk_test_51OFcxhSJ9imTpFOMrr7cLjkKItk8MT04D4U3l2L9diYzzh7XSJ4IGUgyk7EA1JjKzVm1gm51ePzgHGkXk3zaTweX00CcmdCw7g");
    const body = {
      products: data
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const response = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    })
    const session = await response.json();
    const result  = stripe.redirectToCheckout({
      sessionId:session.id
    });
    if(result.error){
      console.log(result.error);
    }
  }
  return (
    <div>
      {/* <h2 className="headcart">Cart</h2> */}

      <div className="content-cart-parent">
       

      <h2 className="headcart">Shopping Cart</h2>
          {data &&
            data.map((item, index) => {
              return (
                <div className="content-cart" key={index}>
                 
                  <div className="left_div">
                    <div className="img-div">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="add_sub_parent_div">
                      <button
                        className="quantity-btn"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="right_div">
                   
                    <h3>Item Quantity:{item.quantity}</h3>
                    {/* <h3>{item.product_name}</h3> */}
                    <h3>Item Price: {item.price} Rs. </h3>
                    <h3 className="cartprice">
                     Total Items Price: {item.price * item.quantity + " Rs. " }
                  </h3>
                  <div className="cartbuttonParent">
                  <button
                      className="remove-cart"
                      onClick={() => dispatch(RemoveItem({ id: item.id }))}
                    >
                      Remove Item
                    </button>
                   
                    <button className="backbtn" onClick={()=>navigate(-1)}>
                      Previous page
                    </button>
                  </div>
                  </div>
                 
                </div>
              );
            })}
    
        
            <div className="parent_total_buy">
            <div className="total">
              <h2>Total Amount(in Rs.) :<span style={{ color: "green" }}>{total} </span> </h2>
              {/* <h1 style={{ color: "black" }}>{total}</h1> */}
            </div>
            <div className="buy">
              <button className="checkout" onClick={makePayment}>Checkout</button>
            </div>
            </div>
        
      </div>
      <AddFooter/>
    </div>
  );
};

export default AddtoCart;