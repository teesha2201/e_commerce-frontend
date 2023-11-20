import React, { useState ,useEffect } from 'react'
import "../Style/Fashion.css"
import { NavLink ,Outlet } from 'react-router-dom';
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"
const Fashion = () => {
    
    const [fashion,setFashion] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
    
      async function apiFun(){
       const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
       const res = await fetchdata.json();
       console.log(res);
       setFashion(res);
        }
        apiFun();
    },[])

  return (
    <>
    <div className='fashionsuperContainer'>
        <div className='fashion-Sub-route-Container'>
          <ul>
            <li><NavLink to="/fashion/men">Men's</NavLink></li>
            <li><NavLink to="/fashion/women">Women's</NavLink></li>
            <li><NavLink to="/fashion/kid">Kid's</NavLink></li>
          </ul>
        </div>
       <div className="fashioncart-wrapper">
        {fashion.filter((item)=>item.category==="fashion").map((item,index)=>{
            const {
              id = item.id,
              image = item.image,
              price= parseInt(item.price),
              // Brand = item.Number_of_Items
            }= item;
            return (
                <div className="fashionimg-wrapper item" key={item.id}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                  <img src={item.image} alt="Not Found"/>
                  </NavLink>
                   <br/>
                <div className="fashiontext-wrapper item">
                    <span className='Brand'>
                    
                    </span>
                    <span className='ProductName'>
                      {item.heading.slice(0,20)}
                    </span>

                    <span>
                      {item.product_Features}
                    </span>
                        
                    <h3>
                       Rs.{item.price}
                    </h3>
                    <div className="fashionbtn-wrapper item ">
                    <NavLink to={`/addtocart/${item.id}`}> 
                      <button onClick={()=>dispatch(addtoCart({id,image,price}))} className='fashionaddtocartbtn'>Add To Cart</button>
                    </NavLink>   
                      <button onClick={()=>{}} className='fashionremoveitembtn'>Remove item </button>
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

export default Fashion
