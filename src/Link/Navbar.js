
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Error from "../Component/Error";
import { Routes, Route, NavLink, useNavigate} from "react-router-dom";
import Electronics from '../Component/Electronics';
import Home from '../Component/Home';
import All from '../Component/All';
import Titan from '../Component/WatchTitan';
import Fashion from '../Component/Fashion';
import Men from '../Component/Mens';
import Women from "../Component/Women";
import Kids from '../Component/KidsWear';
import Grocery from '../Component/Grocery';
import Snacks from '../Component/Snacks';
import TeaCofeeBeverages from '../Component/TeaCoffee';
import IndianRegularFood from "../Component/IndianRegularFood";
import BeautyProduct from '../Component/BeautyProduct';
import Mac from "../Component/Mac";
import SwissBeauty from "../Component/SwissBeauty";
import IPhone from '../Component/Iphone';
import Laptop from "../Component/Laptop";
import Watch from "../Component/Watch"
import MoreDetails from "../Component/MoreDetails";
import AddtoCart from '../Redux/Addtocart';
import Dynamicpage from '../Component/Dynamicpage';
import LoginNew from '../Login/Loginnew';
import RegisterNew from "../Login/Registernew"
import './Navbar.css';
import Searchbar from '../Searchbar/Searchbar';
import PrivateComponent from '../Login/PrivateComponent';




const Navbar = () => {

  const auth = localStorage.getItem('token')

  const navigate = useNavigate();

  const logout = ()=>{
    console.log("Logout")
    localStorage.clear(auth);
    navigate('/register');
  }

  const [isHomeData, setIsHomeData] = useState(false);
  const [isAllData, setIsAllData] = useState(false);
  const [isFashiondata, setIsFashionData] = useState(false);
  const [isBeautyData, setIsBeautyData] = useState(false);
  const [isGrocerydata, setIsGroceryData] = useState(false);
  const [isElectronicsData, setIsElectronicsData] = useState(false);

  const [count, setCount] = useState(false);
  const countItem = useSelector((state) => state.Cart.cart);

  const toggleHomeMenu = () => {
    setIsHomeData(!isHomeData);
  };
  const toggleAllMenu = () => {
    setIsAllData(!isAllData);
  };
  const toggleFashionMenu = () => {
    setIsFashionData(!isFashiondata);
  };
  const toggleBeautyMenu = () => {
    setIsBeautyData(!isBeautyData);
  };
  const toggleGroceryMenu = () => {
    setIsGroceryData(!isGrocerydata);
  };
  const toggleElectronicsMenu = () => {
    setIsElectronicsData(!isElectronicsData);
  };


 

  return (
    <>
    

        <div className='routeSuperParent'>
        {/* code of hamberger */}
        <div onClick={() => setCount(!count)} className="display">
            <i className={`fa-solid ${count ? 'fa-close' : 'fa-bars'}`}></i>
        </div>
        {/* ********************************************************* */}
          <nav className='parent2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPgiwp4kyzZKFLxppestTTewr49Ro4UTpfmooJCiHfa7YwZBxfPyDT1Q9rf3htSUJ-UQ&usqp=CAU" alt="Not Found"/>
            <h4 className='firstheading'>"Let's &nbsp;<span className='shop'> shop</span>"</h4>
          </nav>
            
           
            
         <ul className='linkParent'>

              <li className="list">
                <div onDoubleClick={toggleHomeMenu} className='home-link'>
                  <NavLink to="/" className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>HOME</NavLink>
                </div>
              </li>


              <li className="list">
                <div onDoubleClick={toggleAllMenu} className="all-link">
                  <NavLink to="/all" className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>All</NavLink>
                </div>
                {isAllData && (
                  <ul className="all_sub">
                    <li>
                      <NavLink to="/all/titanWatch">Titan Watch</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all/snacks">Snacks</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all/kids">Kid's</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="list">
                <div onDoubleClick={toggleFashionMenu} className="fashion-link">
                  <NavLink to="/fashion"  className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Fashion</NavLink>
                </div>
                {isFashiondata && (
                  <ul className="fashion_sub">
                    <li>
                      <NavLink to="/fashion/men">Men</NavLink>
                    </li>
                    <li>
                      <NavLink to="/fashion/women">Women</NavLink>
                    </li>
                    <li>
                      <NavLink to="/fashion/kid">Kids</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="list">
                <div onDoubleClick={toggleGroceryMenu} className="grocery-link">
                  <NavLink to="/grocery" className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Grocery</NavLink>
                </div>
                {isGrocerydata && (
                  <ul className="groceryitem_sub">
                    <li>
                      <NavLink to="/grocery/snacks">Snacks</NavLink>
                    </li>
                    <li>
                      <NavLink to="/grocery/teaCofeeBeverages">Tea ,Cofee ,Beverages</NavLink>
                    </li>
                    <li>
                      <NavLink to="/grocery/indianRegularFood">Indian Regular Food</NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li className="list" >
                <div onDoubleClick={toggleBeautyMenu} className="beautyProduct-link">
                  <NavLink to="/beautyproduct" className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>BeautyProduct</NavLink>
                </div>

                {isBeautyData && (
                  <ul className="beautyproduct_sub">
                    <li>
                      <NavLink to="/beautyproduct/mac">Mac</NavLink>
                    </li>
                    <li>
                      <NavLink to="/beautyproduct/swissBeauty">Swiss Beauty</NavLink>
                    </li>


                  </ul>
                )}
              </li>

              <li className="list">
                <div onDoubleClick={toggleElectronicsMenu} className="elctronics-link">
                  <NavLink to="/electronics" className="links" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Electronics</NavLink>
                </div>
                {isElectronicsData && (
                  <ul className="electronics_sub">
                    <li>
                      <NavLink onClick={() => setCount(!count)} to="/electronics/iphone"  className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Iphone</NavLink>
                    </li>
                    <li>
                      <NavLink  onClick={() => setCount(!count)} to="/electronics/laptop" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Laptop</NavLink>
                    </li>
                    <li>
                      <NavLink  onClick={() => setCount(!count)} to="/electronics/watch" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Watchs</NavLink>
                    </li>
                  </ul>
                )}
              </li>

          </ul>
        
            <div className='parent3'>
              <ul className='iconsParent'>
                 <li>
                  <NavLink to='/searchbar'>🔎</NavLink>
                 </li>
               
                <li style={{color:"blue" ,width:"25%",cursor:"pointer"}} onClick={()=>navigate("/addtocart/:id")}>🛒
                  <span>{countItem.length}</span>
                </li>
                <li>
                <i class="fa-regular fa-user" ></i>
                </li>
              
                <li style={{color:"navy"}} className='profile'>
                  <NavLink to='/register' >
                  
                    <span className='login_logout' > {auth ? <NavLink onClick={logout} to="/login">Logout</NavLink>:
                    <>
                    <button className='loginbtn' >
                    <NavLink to="/login">Login </NavLink>
                  </button>
                  <button className='signupbtn'>
                  <NavLink to="/register">SignUp</NavLink>
                  </button>
                    </>
                      }
                     </span>
                  </NavLink>
                </li>
              
               
              </ul>
            </div>
        </div>
       
        <Routes>

        
        
          
      

          <Route path="/" element={<Home />} />
    
        
          <Route path="/all" element={<All />} />
          <Route path="/all/titanWatch" element={<Titan />} />
          <Route path="/all/snacks" element={<Snacks />} />
          <Route path="/all/kids" element={<Kids />} />

          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/men" element={<Men />} />
          <Route path="/fashion/women" element={<Women />} />
          <Route path="/fashion/kid" element={<Kids />} />

          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/snacks" element={<Snacks />} />
          <Route path="/grocery/teaCofeeBeverages" element={<TeaCofeeBeverages />} />
          <Route path="/grocery/indianRegularFood" element={<IndianRegularFood />} />

          <Route path="/beautyproduct" element={<BeautyProduct />} />
          <Route path="/beautyproduct/mac" element={<Mac />}></Route>
          <Route path="/beautyproduct/swissBeauty" element={<SwissBeauty />}></Route>


          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/iphone" element={<IPhone />} />
          <Route path="/electronics/laptop" element={<Laptop />} />
          <Route path="/electronics/watch" element={<Watch />} />

          {/* Dynamic Route try */}
          <Route path="/moreDetails/:id" element={<MoreDetails />} />
          <Route path="/moreDetail/:id" element={<Dynamicpage />} />
            <Route element={<PrivateComponent/>}>
          <Route path="/addtocart/:id" element={<AddtoCart />} />
          </Route>
          <Route path="*" element={<Error />} />
          
          {/* <Route path="/search" element={<SearchProduct/>}/> */}
          <Route path='/searchbar' element={<Searchbar/>}/>

          
          <Route path="/login" element={<LoginNew/>}/>
          <Route path="/register" element={<RegisterNew/>}/>
        </Routes>
        

      {/* ***************************************Navigation in Responsive ************************/}
       
        <div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className="navbar-listResponsive">
                <li className='listres'>{auth ? 
                <NavLink onClick={() => {setCount(!count) ;logout()}} to="/register" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>
                      Logout
                  </NavLink>:<NavLink  onClick={() => setCount(!count)} to="/login" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Login</NavLink>}
                
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>
                      Home
                  </NavLink>
                </li>
                <li className="listres">
                 
                    <NavLink  onClick={() => setCount(!count)} to="/all" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>All</NavLink>
                 
                </li>
                <li className="listres">
            
                    <NavLink onClick={() => setCount(!count)} to="/fashion" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Fashion</NavLink>
          
                </li>
                <li className="listres">
               
                    <NavLink onClick={() => setCount(!count)} to="/grocery" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Grocery</NavLink>
               
                </li>
                <li className="listres">
                 
                    <NavLink  onClick={() => setCount(!count)} to="/beautyproduct" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>BeautyProduct</NavLink>
                 
                </li>
                <li className="listres">
                 
                    <NavLink  onClick={() => setCount(!count)} to="/electronics" className="navlinkRes" style={({isActive})=>({color: isActive ? "aqua":"Navy"})}>Electronics</NavLink>
                 
                </li>  
              </ul>
        </div>     
    </>
  )
}

export default Navbar

