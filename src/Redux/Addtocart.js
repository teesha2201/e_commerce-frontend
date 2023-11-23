import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import AddFooter from "../Component/Footer";
import "../Style/AddtoCart.css"
import { useNavigate } from "react-router-dom";
const AddtoCart = () => {
 const navigate= useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Cart.cart);

  const total = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

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
                      <img src={item.image} alt="" />
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
              <button>Buy Now</button>
            </div>
            </div>
        
      </div>
      <AddFooter/>
    </div>
  );
};

export default AddtoCart;