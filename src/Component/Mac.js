import React,{useState,useEffect} from 'react'
import { NavLink,Outlet} from 'react-router-dom'
import axios from "axios";
import "../Style/Laptop.css"
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"
const Mac = () => {

  const [mac,setMac] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore')
    .then((res)=>{
      console.log(res)
      return setMac(res.data)})
    .catch((err)=>console.log(err))

},[] );

  return (
    <>
    <div className='laptopsuperContainer'>
    <div className="laptopcart-wrapper">
            {mac.filter((item)=>item.category==="beautyProduct" && item.subCategory ==="Mac").map((item)=>{
               const {
                id = item.id,
                image = item.image,
                price= parseInt(item.price),
                subCategory= item.subCategory
              }= item;
                return (
                    <div className="laptopimg-wrapper item" key={item.id}>
                      <NavLink to={`/moreDetails/${item.id}`}>
                      <img src={item.image} alt="Not Found"/>
                      </NavLink>
                       <br/>
                    <div className="laptoptext-wrapper item">
                        <span className='Brand'>    
                        </span>
                        <span className='ProductName'>
                          {item.product_name.slice(0,30)}
                        </span>
                        <span></span>
                        <h3>
                           Rs.{item.price}
                        </h3>
                        <div className="laptopbtn-wrapper item ">
                        <NavLink to={`/addtoCart/${item.id}`}>
                        <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='laptopaddtocartbtn'>Add To Cart</button>
                        </NavLink>  
                          {/* <button onClick={()=>{}} className='laptopremoveitembtn'>Buy Now</button> */}
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

export default Mac