import React,{useState} from 'react'

import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Electronics from '../Component/Electronics';
import Home from '../Component/Home';
import All from '../Component/All';
import Fashion from '../Component/Fashion';
import Men from '../SubRoute/Fashion/Mens';
import Women from "../SubRoute/Fashion/Women";
import Kids from '../SubRoute/Fashion/KidsWear';
import Grocery from '../Component/Grocery';
import Snacks from '../SubRoute/Grocery/Snacks';
import TeaCofeeBeverages from '../SubRoute/Grocery/TeaCoffee';
import IndianRegularFood from "../SubRoute/Grocery/IndianRegularFood";
import BeautyProduct from '../Component/BeautyProduct';
import Mac from "../SubRoute/Beautyproduct/Mac";
import SwissBeauty from "../SubRoute/Beautyproduct/SwissBeauty";
import IPhone from '../SubRoute/Electronics/Iphone';
import Laptop from "../SubRoute/Electronics/Laptop"
import MoreDetails from "../Component/MoreDetails";


import './Navbar.css' ;
// import './NewNavbar.css';

const Navbar = () => {
  const [isHomeData,setIsHomeData] = useState(false);
  const [isAllData,setIsAllData] = useState(false);
  const [isFashiondata, setIsFashionData] = useState(false);
  const [isBeautyData,setIsBeautyData]  = useState(false);
  const [isGrocerydata, setIsGroceryData] = useState(false);
  const [isElectronicsData,setIsElectronicsData]  = useState(false);
  
  const toggleHomeMenu = () => {
    setIsHomeData(!isHomeData);
  };
  const toggleAllMenu =()=>{
    setIsAllData(!isAllData);
  };
  const toggleFashionMenu = () => {
    setIsFashionData(!isFashiondata);
  };
  const toggleBeautyMenu =()=>{
    setIsBeautyData(!isBeautyData);
  };
  const toggleGroceryMenu = () => {
    setIsGroceryData(!isGrocerydata);
  };
  const toggleElectronicsMenu =()=>{
    setIsElectronicsData(!isElectronicsData);
  };
  

  return (
    <>
    <BrowserRouter>
    
    <div className='routeSuperParent'>
        <nav className='parent2'>
            <h4 className='firstheading'>"Treat yo'self"</h4>
            <ul className='linkParent'>
                
                <li onDoubleClick={toggleHomeMenu} className='fashion-link'>
                    <NavLink to="/" className="links">HOME</NavLink>
                    {/* {isHomeData && (
                      <ul className="all_sub">
                        <li>
                          <NavLink to="/api/all">All</NavLink>
                        </li>
                        <li>
                          <NavLink to="/api/fashion">Fashion</NavLink>
                        </li>
                        <li>
                          <NavLink to="/api/beautyprodut">Beauty Product</NavLink>
                        </li>
                    </ul>
                  )} */}
                </li>
                
                <li onDoubleClick={toggleAllMenu } className="fashion-link">
                  {/* <div onMouseDown={toggleAllMenu } className="fashion-link"> */}
                    <NavLink to="/api/all" className="links">ALL</NavLink>
                  {/* </div> */}
                  {isAllData && (
                    <ul className="all_sub">
                    <li>
                      <NavLink to="/all/">Men's</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all/">Women's</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all/">Kid's</NavLink>
                    </li>
                  </ul>
                  )}
                </li>

                <li onDoubleClick={toggleFashionMenu } className="fashion-link">
                    {/* <div onMouseDown={toggleFashionMenu } className="fashion-link"> */}
                      <NavLink to="/fashion" className="links">Fashion</NavLink>
                    {/* </div>   */}
                    {isFashiondata && (
                    <ul className="fashion_sub">
                      <li>
                        <NavLink to="/fashion/men">Men's</NavLink>
                      </li>
                      <li>
                        <NavLink to="/fashion/women">Women's</NavLink>
                      </li>
                      <li>
                        <NavLink to="/fashion/kid">Kid's</NavLink>
                      </li>
                    </ul>
                    )}
                </li>

                <li onDoubleClick={toggleGroceryMenu } className="fashion-link" >
                  {/* <div onMouseDown={toggleGroceryMenu } className="fashion-link"> */}
                    <NavLink to="/api/grocery" className="links">Grocery</NavLink>
                  {/* </div> */}
                  {isGrocerydata && (
                    <ul className="groceryitem_sub">
                      <li>
                        <NavLink to="/api/grocery/snacks">Snacks</NavLink>
                      </li>
                      <li>
                        <NavLink to="/api/grocery/teaCofeeBeverages">Tea ,Cofee ,Beverages</NavLink>
                      </li>
                      <li>
                        <NavLink to="/api/grocery/indianRegularFood">Indian Regular Food</NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li onDoubleClick={toggleBeautyMenu } className="fashion-link">
                  {/* <div onMouseDown={toggleBeautyMenu } className="fashion-link"> */}
                    <NavLink to="/api/beautyproduct" className="links">BeautyProduct</NavLink>
                  {/* </div> */}
                  {isBeautyData && (
                    <ul className="beautyproduct_sub">
                    <li>
                      <NavLink to="api/beautyproduct/mac">Mac</NavLink>
                    </li>
                    <li>
                      <NavLink to="api/beautyproduct/swissBeauty">Swiss Beauty</NavLink>
                    </li>
                    <li>
                      <NavLink to="api/beautyproduct/skinCare">SkinCare & accessories</NavLink>
                    </li>
                  </ul>
                  )}
                </li>

                <li onDoubleClick={toggleElectronicsMenu} className='fashion-link'>
                  {/* <div onMouseDown={toggleElectronicsMenu} className='fashion-link'> */}
                  <NavLink to="/electronics" className="links">Electronics</NavLink>
                  {/* </div> */}
                  {isElectronicsData && (
                    <ul className="electronics_sub">
                    <li>
                      <NavLink to="/electronics/iphone">Iphone</NavLink>
                    </li>
                    <li>
                      <NavLink to="/electronics/tv&homeapplicance">Tv & Home Applicance</NavLink>
                    </li>
                    <li>
                      <NavLink to="/electronics/laptop">Laptop</NavLink>
                    </li>
                  </ul>
                  )}
                </li>
            </ul>
        
        <div className='parent3'>
           <ul className='iconsParent'>
            <li><input placeholder='Search here...                      🔍' className="searchbar"/></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
            <li><i class="fa-solid fa-user"></i></li>
           </ul>
        </div>

        </nav>
    </div>
    
        <Routes>
                <Route path="/" element={<Home/>}>
                  <Route path="">All</Route>
                  <Route path="">Fashion</Route>
                  <Route path="">Beauty Product</Route>
                </Route>
                <Route path="/api/all" element={<All/>}>
                  <Route path=""></Route>
                  <Route path=""></Route>
                  <Route path=""></Route>
                </Route>
                <Route path="/fashion" element={<Fashion/>}>
                  <Route path="/fashion/men" element={<Men/>}>Men's</Route>
                  <Route path="/fashion/women" element={<Women/>}>Women's</Route>
                  <Route path="/fashion/kid" element={<Kids/>}></Route>
                </Route>
                <Route path="api/grocery" element={<Grocery/>}>
                  <Route path="api/grocery/snacks"></Route>
                  <Route path="api/grocery/teaCofeeBeverages"></Route>
                  <Route path="api/grocery/indianRegularFood"></Route>
                </Route>
                <Route path="api/beautyproduct" element={<BeautyProduct/>}>
                  <Route path="api/beautyproduct/mac"></Route>
                  <Route path="api/beautyproduct/swissBeauty"></Route>
                  <Route path="api/beautyproduct/skinCare"></Route>
                </Route>
                <Route path="/electronics" element={<Electronics/>}>
                  <Route path="/electronics/iphone" element={<IPhone/>}></Route>
                  <Route path="/electronics/laptop"></Route>
                  <Route path="/electronics/tv&homeapplicance"></Route>
                </Route>
                {/* Dynamic Route try */}
                <Route path="/moreDetails/:id" element={<MoreDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
