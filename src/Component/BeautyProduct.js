
import React,{useState,useEffect} from 'react'
import "../Style/Beauty.css"
import { NavLink ,Outlet} from 'react-router-dom';
import AddFooter from './Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"

const BeautyProduct = () => {
    const [beauty,setBeauty] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        async function apiFun(){
          const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
          const res = await fetchdata.json();
          console.log(res);
          setBeauty(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div className='beautysuperContainer'>
        <div className='beauty-Sub-route-Container'>
          <ul>
            <li><NavLink to="/beautyproduct/mac">Mac Product</NavLink></li>
            <li><NavLink to="/beautyproduct/swissBeauty">Swiss Beauty</NavLink></li>
           
          </ul>
        </div>
       <div className="beautycart-wrapper">
        {beauty.filter((item)=>item.category==="beautyProduct").map((item,index)=>{
            const {
              id = item.id,
              image = item.image,
              price= parseInt(item.price),
              subCategory= item.subCategory
            }= item;
            return (
                <div className="beautyimg-wrapper item" key={index}>
                  <NavLink to={`/moreDetails/${item.id}`}>
                    <img src={item.image} alt="Not Found" className='beautyimg'/>
                  </NavLink>
                   <br/>
                <div className="beautytext-wrapper item">
                    <span className='Brand'>
                  
                    </span>   
                    <span className='ProductName'>
                        {item.product_name.slice(0,18)}
                    </span>
                    <h3>
                       Rs.{item.price}
                    </h3>
                    <div className="beautybtn-wrapper item ">
                      <NavLink to={`/addtocart/${item.id}`}>
                      <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='beautyaddtocartbtn'>Add To Cart</button>
                      </NavLink>
                      {/* <button onClick={()=>{}} className='beautyremoveitembtn'>Buy Now </button> */}
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

export default BeautyProduct
