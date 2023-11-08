import React, { useState ,useEffect } from 'react'
import "../Style/Beauty.css"
import { NavLink ,Outlet } from 'react-router-dom';

const Fashion = () => {
    
    const [fashion,setFashion] = useState([])
    useEffect(()=>{
    
      async function apiFun(){
       const fetchdata = await fetch("http://localhost:5005/api/fashion")
       const res = await fetchdata.json();
       console.log(res);
       setFashion(res);
        }
        apiFun();
    },[])

  return (
    <>
    <div className='superContainer'>
        <div className='Sub-route-Container'>
          <ul>
            <li><NavLink to="/beautyproduct/mac">Men's</NavLink></li>
            <li><NavLink to="/beautyproduct/swissBeauty">Women's</NavLink></li>
            <li><NavLink to="/beautyproduct/skinCare">Kid's Wear</NavLink></li>
          </ul>
        </div>
       <div className="beautycart-wrapper">
        {fashion.map((item,index)=>{
            return (
                <div className="beautyimg-wrapper item" key={item.id}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                  <img src={item.image} alt="Not Found"/>
                  </NavLink>
                   <br/>
                <div className="beautytext-wrapper item">
                    <span className='Brand'>
                       {item.heading.slice(0,25)}
                    </span>
                    <span>
                      {item.Material_Care}
                    </span>
                    <span>
                      {item.product_details}
                    </span>
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

export default Fashion
