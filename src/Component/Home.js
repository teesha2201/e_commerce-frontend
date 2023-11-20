import React,{useState,useEffect} from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style/Home.css"
import { NavLink, Outlet} from 'react-router-dom';
import AddFooter from '../Component/Footer';
import axios from "axios";
const Home = () => {
  const [home,setHome] = useState([])
  const token = localStorage.getItem('token')
    useEffect(()=>{

      // async function apiFun(){

        axios.get('https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore')
            .then((res)=>{setHome(res.data);})
            .catch((err)=>console.log(err))
            // localStorage.getItem("token",res.data.token);
            // localStorage.getItem("name",res.data.name);
      
      },[token])
        // if(token)
        // {
          // apiFun();
        // }
        
        
        
    //  })

  return (
    <>
    
    <div className="homesuperContainer">
   
      <div className='homeTopheading'>
        <Carousel
              infiniteLoop={true}
              useKeyboardArrows
              autoPlay
              interval={3000}
              stopOnHover={false}
              stopOnInteraction={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              <div>
                <img
                  className="slideShowimage"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/CatPage/JUPITER/Phase3/Header/Header_1500x300_01.gif"
                  alt="Not found"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/misc/general/free/original/XtnfKRsEC-Reset_Desktop.jpg?dpr=1"
                  alt="Not Found"
                  width="100%"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/PCGrapgics/12_Steal_Deals_Sarees_to_love._SX3000_QL85_.jpg"
                  alt="Not Found"
                  width="100%"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://m.media-amazon.com/images/G/31/img23/Beauty/Jupiter23/Headers/1pc._CB573639892_.jpg"
                  alt="Not Found"
                  width="100%"
                />
              </div>
        </Carousel>
        <div className='homeTopheading'>
        <h1 className=''><span className='top'>T</span >op <span className='top'>C</span>ompany <span className='top'>L</span>aptop <span className='top'>A</span>nd <span className='top'>P</span>hone </h1>
        </div>
      </div >
     <div className='homelaptopphoneParent'>
     {home.filter((item)=>(item.subCategory==="Laptop" && item.id%7===0) ).map((item)=>{
        return(
          <div className="homeimg-wrapper item" key={item.id}>
            <div className='homeimageContainer'>
            <NavLink to={`/moreDetails/${item.id}`}>
              <img src={item.image} alt="Not Found"/>
            </NavLink>
            </div>
           <br/>
        <div className="hometext-wrapper item">
            <h2 className='Brand'>
               {item.Brand}
            </h2>
            <h2 className='ProductName'>
              {item.product_name}
            </h2>
        </div>
        
        </div>  
        
        )
      })}

      {home.filter((item)=>item.subCategory==="iphone" && item.id%7===0).map((item)=>{
        return(
          <div className="homeimg-wrapper item" key={item.id}>
            <div className='homeimageContainer'>
            <NavLink to={`/moreDetails/${item.id}`}>
              <img src={item.image} alt="Not Found"/>
            </NavLink>
            </div>
           <br/>
        <div className="hometext-wrapper item">
            <h2 className='Brand'>
               {item.Brand}
            </h2>
            <h2 className='ProductName'>
              {item.product_name}
            </h2>
        </div>
        
        </div>  
        
        )
      })} 
     </div>
     <div className='hometopheading2parent'>
      <div className='homeTopheading2'>
          <h1 className=''><span className='top'>T</span >op <span className='top'>L</span>atest <span className='top'>F</span>ashion <span className='top'>A</span>vailable <span className='top'># Festive Offer 👟 👔</span><span className='top'> On </span >Top<span className='top'> Brand 💖🎆</span></h1>
        </div>
     </div>
     <div className='homelaptopphoneParent'>
     {/* item.id%8===0  && (item.id===80 && item.id===8 || item.id<=70 ) */}
     {home.filter((item)=>((item.subCategory==="kids" && item.id%8===0 )|| item.id===8 ) || (item.id===80 && item.id<=70 )  ).map((item)=>{
        return(
          
          <div className="homeimg-wrapper item" key={item.id}>
            
            <div className='homeimageContainer'>
            <NavLink to={`/moreDetails/${item.id}`}>
              <img src={item.image} alt="Not Found"/>
            </NavLink>
            </div>
           <br/>
        <div className="hometext-wrapper item">
            <h2 className='Brand'>
               {item.heading}
            </h2>
            <h2 className='ProductName'>
              {item.product_name}
            </h2>
            
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

export default Home

