import React,{useState,useEffect} from 'react'
import { NavLink,Outlet} from 'react-router-dom'
import axios from "axios";
import "../SubStyle/Laptop.css"
import AddFooter from '../../Component/Footer';

const Mac = () => {

  const [mac,setMac] = useState([])
  useEffect(()=>{
    axios.get('https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore')
    .then((res)=>{
      console.log(res)
      return setMac(res.data)})
    .catch((err)=>console.log(err))

},[] );

  return (
    <>
    <div className='laptopsuperContainer'>
    <div className="laptopcart-wrapper">
            {mac.filter((item)=>item.category==="beautyProduct" && item.subCategory ==="Mac").map((item)=>{
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
                          {item.product_name.slice(0,30)}
                        </span>
                        <span></span>
                        <h3>
                           Rs.{item.price}
                        </h3>
                        <div className="laptopbtn-wrapper item ">
                        <NavLink to={`/addtoCart/${item.id}`}>
                          <button onClick={()=>{}} className='laptopaddtocartbtn'>Add To Cart</button>
                        </NavLink>  
                          <button onClick={()=>{}} className='laptopremoveitembtn'>Buy Now</button>
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

export default Mac