
import React,{useEffect,useState} from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import "../Style/All.css"
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"

const All = () => {
  const [all,setAll] = useState([])
  const dispatch = useDispatch();
    useEffect(()=>{
        async function apiFun(){
          const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
          const res = await fetchdata.json();
          console.log(res);
          // console.log(res[2].productDetail[3]);
          setAll(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div className='allsuperContainer'>
        <div className='all-Sub-route-Container'>
          <ul>
            <li><NavLink to="/all/titanWatch">Titan Watchs</NavLink></li>
            <li><NavLink to="/all/snacks">Snacks</NavLink></li>
            <li><NavLink to="/all/kids">Kids</NavLink></li>
          </ul>
        </div>
       <div className="allcart-wrapper">
        {all.filter((item)=>(item.category==="electronics" && item.id<=16) ||(item.category==="grocery" && item.id<=70) || (item.category==="fashion" && item.id<=80)).map((item,index)=>{
            const {
              id = item.id,
              image = item.image,
              price= parseInt(item.price),
              // Brand = item.Number_of_Items
            }= item;
            return (
                <div className="allimg-wrapper item" key={index}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                    <img src={item.image} alt="Not Found" className='allimg'/>
                  </NavLink>
                   <br/>
                <div className="alltext-wrapper item">
                    <span className='Brand'>
                      
                    </span >
                    
                    <span className='ProductName'>
                    {item.subCategory}
                    </span>
                  
                    <span className='Price'>
                       Rs.{item.price}
                    </span>
                    <div className="allbtn-wrapper item ">
                      <NavLink to={`/addtocart/${item.id}`}>
                        <button onClick={()=>dispatch(addtoCart({id,image,price}))} className='alladdtocartbtn'>Add To Cart</button>
                      </NavLink>  
                      <button onClick={()=>{}} className='allremoveitembtn'>Buy Now </button>
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

export default All
