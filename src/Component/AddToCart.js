import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";
import AddFooter from "./Footer";
import "../Style/AddtoCart.css"

const Cart = () => {
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
      <h2 className="headcart">Cart</h2>

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
        </div>

        <div>
          {data &&
            data.map((item, index) => {
              return (
                <div className="content-cart" key={index}>
                 <div className="imageAddToCart">
                    <img  src={item.image} alt="Not Found" />
                 </div>
                  <div className="cart-subcontent">
                    <h2>{item.Brand}</h2>
                    <button className="remove-cart" onClick={() => dispatch(RemoveItem({ id: item.id }))}>Remove Cart</button>
                  </div>
                  <h2 className="cartprice">
                    {"Rs " + item.price * item.quantity}
                  </h2>
                  <div>
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
              );
            })}
        </div>

        <div className="total">
          <h2>Total </h2>
          <h1 style={{ color: "black" }}>{total}</h1>
        </div>

        <div className="buy">
          <button>Buy Now</button>
        </div>
      </div>
      <AddFooter/>
    </div>
  );
};

export default Cart;



// import React,{useState,useEffect} from "react";
// import { useParams ,useNavigate} from "react-router-dom";
// import axios from "axios";
// import AddFooter from "./Footer";
// import "../Style/AddtoCart.css"
// import { useSelector, useDispatch } from "react-redux";
// import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Slice";

// function AddToCart(){
//     const {id} = useParams();
//     const dispatch = useDispatch();

//     const data = useSelector((state) => state.Cart.cart);
  
//     const total = data.reduce((acc, item) => {
//       return acc + item.price * item.quantity;
//     }, 0);
  
//     const handleIncreaseQuantity = (id) => {
//       dispatch(IncreaseQuantity({ id }));
//     };
//     const handleDecreaseQuantity = (id) => {
//       dispatch(DecreaseQuantity({ id }));
//     };
//     // const Location = useLocation()
//     const [addToCart,setAddToCart] =useState([])
//     const navigate = useNavigate();

//     useEffect(()=>{
//             axios.get('http://localhost:5005/api/getdatafromproductstore')
//             .then((res)=>setAddToCart(res.data))
//             .catch((err)=>console.log(err))

//     },[id] );

//     return(
//         <>
//             {addToCart.filter((item)=>item.id===id).map((item,index)=>{
//                 return(
//                     <div>
                        
//                         <div className="parentAddtoCart">
                        
//                             <div className="imageAddToCart">
//                                 <img  src={item.image} alt="Not Found" />
//                             </div>
//                             <div className="specification" >
//                                 <ul>
//                                     <li>Deliver To: Teesha Gupta</li>
//                                     <li><h3>Brand:{item.Brand}</h3></li>
//                                     <li><h3>company_name:{item.product_name}</h3></li>
                                    
//                                     <li><h4>Product Name : {item.product_name}</h4></li>
//                                     <li><h4>Model Name: {item.Model_Name}</h4></li>
//                                     <li><h4>price :{item.price}</h4></li>
//                                     <button onClick={()=>navigate('')} className='removeitembtn'>Remove item </button>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//             <AddFooter/>
//         </>
//     )
// }
//     export default AddToCart