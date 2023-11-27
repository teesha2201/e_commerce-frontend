
import React,{useState,useEffect} from 'react'
// import axios from "axios";
import "../Style/Grocery.css"
import { NavLink ,Outlet} from 'react-router-dom';
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice";
const Grocery = () => {
    const [grocery,setGrocery] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        async function apiFun(){
          const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
          const res = await fetchdata.json();
          console.log(res);
          // console.log(res[2].productDetail[3]);
          setGrocery(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div className='grocerysuperContainer'>
        <div className='grocery-Sub-route-Container'>
          <ul>
            <li><NavLink to="/grocery/snacks">Snacks</NavLink></li>
            <li><NavLink to="/grocery/teaCofeeBeverages">TeaCofeeBeverages</NavLink></li>
            <li><NavLink to="/grocery/indianRegularFood">Indaian Regular Food</NavLink></li>
          </ul>
        </div>
        <div className="grocerycart-wrapper">
        {grocery.filter((item)=>item.category==="grocery").map((item)=>{
             const {
              id = item.id,
              image = item.image,
              price= parseInt(item.price),
              subCategory= item.subCategory
            }= item;
            return (
                
                <div className="groceryimg-wrapper item" key={item.id}>
                  <NavLink to={`/moreDetail/${item.id}`}>
                    <img src={item.image} alt="Not Found"/>
                  </NavLink>
                   <br/>
                <div className="grocerytext-wrapper item">
                    <span className='Brand'>
                      
                    </span>
                   
                    <span className='ProductName'>
                    {item.product_name}
                    </span>
                  
                    <span className='Price'>
                       Rs.{item.price}
                    </span>
                    <div className="grocerybtn-wrapper item ">
                    <NavLink to={`/addtocart/${item.id}`}>  
                    <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='groceryaddtocartbtn'>Add To Cart</button>
                    </NavLink>  
                      {/* <button onClick={()=>{}} className='groceryremoveitembtn'>Buy Now </button> */}
                    </div>
                </div>
               
                </div>   
                )
              })}
        </div>
    </div>
    <Outlet/>
    <AddFooter/>
    </>    
  )
}

export default Grocery
