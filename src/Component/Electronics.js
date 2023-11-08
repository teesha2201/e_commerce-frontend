import React,{useState,useEffect} from 'react'
import axios from "axios";
import "../Style/Beauty.css"
import { NavLink ,Outlet} from 'react-router-dom';
const Electronics = () => {
  const [elect,setElect] = useState([])

    useEffect(()=>{
 
        async function apiFun(){
          const fetchdata = await fetch("http://localhost:5005/api/electronics")
          const res = await fetchdata.json();
          console.log(res);
          setElect(res);
           }
           apiFun();
       },[])

    return (
      <>
        <div className='superContainer'>
            <div className='Sub-route-Container'>
              <ul>
                <li><NavLink to="/api/electronics/Mobile">Moblie & accessories</NavLink></li>
                <li><NavLink to="/api/electronics/tv&applicance">Tv & Home Applicance</NavLink></li>
                <li><NavLink to="/api/electronics/laptop">Laptop</NavLink></li>
              </ul>
            </div>
           <div className="beautycart-wrapper">
            {elect.map((item)=>{
                return (
                    <div className="beautyimg-wrapper item" key={item.id}>
                      <NavLink to={`/moreDetails/${item.id}`}>
                      <img src={item.image} alt="Not Found"/>
                      </NavLink>
                       <br/>
                    <div className="beautytext-wrapper item">
                        <span className='Brand'>
                           {item.company_name}
                        </span>
                        {/* <br/> */}
                        <span>
                          {item.product_name}
                        </span>
                        {/* <br/> */}
                        <span>
                          {item.product_Features}
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

export default Electronics
