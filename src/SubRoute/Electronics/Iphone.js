import React,{useState,useEffect} from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import AddFooter from '../../Component/Footer'

const Iphone = () => {
  const [iphone,setIphone] =useState([])
 
    useEffect(()=>{
      async function apiFun(){
        const fetchdata = await fetch("https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore")
        const res = await fetchdata.json();
        console.log(res);
      
        setIphone(res);
         }
         apiFun();
     },[])

    return(
          
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
            {iphone.filter((item)=>item.subCategory==="iphone").map((item)=>{
                return (
                    <div className="electronicsimg-wrapper item" key={item.id}>
                      <NavLink to={`/moreDetails/${item.id}`}>
                      <img src={item.image} alt="Not Found"/>
                      </NavLink>
                       <br/>
                    <div className="electronicstext-wrapper item">
                        <span className='Brand'>
          
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
                        <NavLink to={`/addtoCart/${item.id}`}>
                          <button onClick={()=>{}} className='electronicsaddtocartbtn'>Add To Cart</button>
                        </NavLink>  
                          <button onClick={()=>{}} className='electronicsremoveitembtn'>Remove item </button>
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

export default Iphone