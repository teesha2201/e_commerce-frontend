import React,{useState,useEffect} from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import '../SubStyle/Laptop.css'
import AddFooter from '../../Component/Footer';

const TeaCofeeBeverages = () => {
  const [teaCofeeBeverages,setTeaCofeeBeverages] = useState([])

    useEffect(()=>{
 
        async function apiFun(){
          const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
          const res = await fetchdata.json();
          console.log(res);
          setTeaCofeeBeverages(res);
           }
           apiFun();
       },[])
  return (
    <>
    <div className='laptopsuperContainer'>
    <div className="laptopcart-wrapper">
            {teaCofeeBeverages.filter((item)=>item.category==="grocery" && item.subCategory ==="grocery_beverages").map((item)=>{
                return (
                    <div className="laptopimg-wrapper item" key={item.id}>
                      <NavLink to={`/moreDetail/${item.id}`}>
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
                          <button onClick={()=>{}} className='laptopremoveitembtn'>Remove item </button>
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

export default TeaCofeeBeverages







