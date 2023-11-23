import React,{useState,useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import '../Style/Laptop.css'
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice";

const SwissBeauty= () => {

  const [swissbeauty,setSwissbeauty] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    async function apiFun(){
      const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
      const res = await fetchdata.json();
      console.log(res);
      setSwissbeauty(res);
       }
       apiFun();
   },[])

  return (
    <>
      <div className='laptopsuperContainer'>
                <div className="laptopcart-wrapper">
            {swissbeauty.filter((item)=>item.category==="beautyProduct" && item.subCategory ==="swiss Beauty").map((item)=>{
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
                          {item.subCategory}{item.id}   
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
                          <button onClick={()=>dispatch(addtoCart({id,image,price}))} className='laptopaddtocartbtn'>Add To Cart</button>
                        </NavLink>  
                          <button onClick={()=>{}} className='laptopremoveitembtn'>Buy Now</button>
                        </div>
                    </div>
                   
                    </div>
                       
                    )
                  })}
            </div>
    </div>
    <AddFooter/>
    </>
  )
}

export default  SwissBeauty





// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const SwissBeauty = () => {
//   return (
//     <>
//       <div>
        
//       </div>
//     <Outlet/>
//     </>
//   )
// }

// export default SwissBeauty