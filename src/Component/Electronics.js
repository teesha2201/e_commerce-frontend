
import React,{useState,useEffect} from 'react'
import "../Style/Electronics.css";
import { NavLink ,Outlet} from 'react-router-dom';
import AddFooter from "./Footer";
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"

const Electronics = () => {
  const [elect,setElect] = useState([])
  const dispatch = useDispatch();
  

    useEffect(()=>{
 
        async function apiFun(){
          const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
          const res = await fetchdata.json();
          console.log(res);
          setElect(res);
           }
           apiFun();
       },[])

    return (
      <>
        <div className='electronicssuperContainer'>
            <div className='electronics-Sub-route-Container'>
              <ul>
                <li><NavLink to="/electronics/iphone">Iphone</NavLink></li>
                <li><NavLink to="/electronics/laptop">Laptop</NavLink></li>
                <li><NavLink to="/electronics/watch">Watch</NavLink></li>
              </ul>
             
            </div>
            <div className='advertisment'>
           
                {/* <iframe src="https://giphy.com/embed/l2QE73aOjxO1fkd6E"  className='advertismentiframe'></iframe> */}
            </div>
            
           <div className="electronicscart-wrapper">
            {elect.filter((item)=>item.category==="electronics").map((item,index)=>{
               const {
                id = item.id,
                image = item.image,
                price= parseInt(item.price),
                subCategory= item.subCategory
              }= item;
                return (
                    <div className="electronicsimg-wrapper item" key={index}>
                      <NavLink to={`/moreDetails/${item.id}`}>
                      <img src={item.image} alt="Not Found"/>
                      </NavLink>
                       <br/>
                    <div className="electronicstext-wrapper item">
                        <span className='Brand'>
                           {/* {item.Number_of_Items} */}
                        </span>
                       
                        <span className='ProductName'>
                          {item.product_name.slice(0,19)}
                        </span>
                        
                        <span>
                          {item.product_Features}
                        </span>
                        
                        <span className='Price'>
                           Rs.{item.price}
                        </span>
                      
                        <div className="electronicsbtn-wrapper item ">
                        <NavLink to={`/addtocart/${item.id}`}>
                        <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='electronicsaddtocartbtn'>Add To Cart </button>
                        </NavLink>  
                          {/* <button onClick={()=>{}} className='electronicsremoveitembtn'>Buy Now</button> */}
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

export default Electronics
