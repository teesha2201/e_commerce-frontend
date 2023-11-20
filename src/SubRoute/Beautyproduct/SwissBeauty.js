import React,{useState,useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import '../SubStyle/Laptop.css'
import AddFooter from '../../Component/Footer';

const SwissBeauty= () => {

  const [swissbeauty,setSwissbeauty] = useState([])
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