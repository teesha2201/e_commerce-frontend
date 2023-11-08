import React,{useState,useEffect} from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style/Home.css"
import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
  const [home,setHome] = useState([])
    useEffect(()=>{
      async function apiFun(){
        const fetchdata = await fetch("http://localhost:5005/api/home")
        const res = await fetchdata.json();
        console.log(res);
        // console.log(res[2].productDetail[3]);
        setHome(res);
         }
         apiFun();
     },[])

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
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/misc/general/free/original/XtnfKRsEC-Reset_Desktop.jpg?dpr=1"
                  alt="Image 2"
                  width="100%"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/PCGrapgics/12_Steal_Deals_Sarees_to_love._SX3000_QL85_.jpg"
                  alt="Image 3"
                  width="100%"
                />
              </div>
              <div>
                <img
                  className="slideShowimage"
                  src="https://m.media-amazon.com/images/G/31/img23/Beauty/Jupiter23/Headers/1pc._CB573639892_.jpg"
                  alt="Image 4"
                  width="100%"
                />
              </div>
        </Carousel>
        <div className='homeTopheading'>
        <h1 className=''>Top Company Laptop and Phone </h1>
        </div>
      </div >
      
    </div>
    <Outlet/>
    </>
    )
    
  }   

export default Home

