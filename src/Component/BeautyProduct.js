import React,{useState,useEffect} from 'react'
import axios from "axios";
import "../Style/Beauty.css"
import { NavLink ,Outlet} from 'react-router-dom';

const BeautyProduct = () => {
    const [beauty,setBeauty] = useState([])
    
    useEffect(()=>{
        async function apiFun(){
          const fetchdata = await fetch("http://localhost:5005/api/beautyproduct")
          const res = await fetchdata.json();
          console.log(res);
          setBeauty(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div className='superContainer'>
        <div className='Sub-route-Container'>
          <ul>
            <li><NavLink to="/beautyproduct/mac">Mac Product</NavLink></li>
            <li><NavLink to="/beautyproduct/swissBeauty">Swiss Beauty</NavLink></li>
            <li><NavLink to="/beautyproduct/skinCare">SkinCare & accessories</NavLink></li>
          </ul>
        </div>
       <div className="beautycart-wrapper">
        {beauty.map((item)=>{
            return (
                <div className="beautyimg-wrapper item" key={item.id}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                  <img src={item.image} alt="Not Found" className='beautyimg'/>
                  </NavLink>
                   <br/>
                <div className="beautytext-wrapper item">
                    <span className='Brand'>
                       {item.company_name}
                    </span>
                    {/* <br/> */}
                    <span>
                      {item.product_name.slice(0,50)}
                    </span>
                    {/* <br/> */}
                    <span>
                      {item.product_details[1].slice(0,30)}
                    </span>
                    {/* <br/> */}
                    <span>
                       Rs.{item.price}
                    </span>
                    <div className="beautybtn-wrapper item ">
                      <button onClick={()=>{}} className='addtocartbtn'>Add To Cart</button>
                      <button onClick={()=>{}} className='removeitembtn'>Remove item </button>
                    </div>
                </div>
               
                </div>   
                )
              })}
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default BeautyProduct
