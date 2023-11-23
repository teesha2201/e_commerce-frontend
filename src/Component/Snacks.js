import React,{useEffect,useState} from "react";
import '../Style/Laptop.css';
import {Outlet,NavLink} from "react-router-dom";
import AddFooter from "./Footer";
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"

const Watch = ()=>{
    const [snacks,setSnacks] =useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
      async function apiFun(){
        const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
        const res = await fetchdata.json();
        console.log(res);
      
        setSnacks(res);
         }
         apiFun();
     },[])
    return(
        <>
           <div className='laptopsuperContainer'>
                <div className="laptopcart-wrapper">
            {snacks.filter((item)=>item.category==="grocery" && item.subCategory ==="grocery_snacks").map((item)=>{
                const {
                  id = item.id,
                  image = item.image,
                  price= parseInt(item.price),
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
                        {item.product_name}
                        </span>
                        
                        <h3>
                           Rs.{item.price}
                        </h3>
                        <div className="laptopbtn-wrapper item ">
                        <NavLink to={`/addtocart/${item.id}`}>
                          <button onClick={()=>dispatch(addtoCart({id,image,price}))} className='laptopaddtocartbtn'>Add To Cart</button>
                        </NavLink>  
                          {/* <button onClick={()=>{}} className='laptopremoveitembtn'>Buy Now </button> */}
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
export default Watch