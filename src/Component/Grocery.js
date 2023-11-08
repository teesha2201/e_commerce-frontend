import React,{useState,useEffect} from 'react'
// import axios from "axios";
import "../Style/Beauty.css"
import { NavLink ,Outlet} from 'react-router-dom';

const Grocery = () => {
    const [grocery,setGrocery] = useState([])
    useEffect(()=>{
        async function apiFun(){
          const fetchdata = await fetch("http://localhost:5005/api/grocery")
          const res = await fetchdata.json();
          console.log(res);
          // console.log(res[2].productDetail[3]);
          setGrocery(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div className='superContainer'>
        <div className='Sub-route-Container'>
          <ul>
            <li><NavLink to="/beautyproduct/mac">Snacks</NavLink></li>
            <li><NavLink to="/beautyproduct/swissBeauty">TeaCofeeBeverages</NavLink></li>
            <li><NavLink to="/beautyproduct/skinCare">Indaian Regular Food</NavLink></li>
          </ul>
        </div>
        <div className="beautycart-wrapper">
        {grocery.map((item)=>{
            return (
                
                <div className="beautyimg-wrapper item" key={item.id}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                  <img src={item.image} alt="Not Found"/>
                  </NavLink>
                   <br/>
                <div className="beautytext-wrapper item">
                    <span className='Brand'>
                       {/* {item.company_name} */}
                    </span>
                    {/* <br/> */}
                    <span>
                    {item.product_name}
                    </span>
                    {/* <br/> */}
                    <span>
                      {/* {item.product_details.slice(0,30)} */}
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

export default Grocery
