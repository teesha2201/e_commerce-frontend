
import React,{useEffect,useState} from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice";

const Men = () => {
  const [men,setMen] =useState([])
  const dispatch = useDispatch();
    useEffect(()=>{
      async function apiFun(){
        const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
        const res = await fetchdata.json();
        console.log(res);
      
        setMen(res);
         }
         apiFun();
     },[])

  return (
   
       <>
    <div className='laptopsuperContainer'>
    <div className="laptopcart-wrapper">
            {men.filter((item)=>item.category==="fashion" && item.subCategory ==="mens").map((item)=>{
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
                          {item.heading.slice(0,20)}
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


export default Men