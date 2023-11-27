import React,{useState,useEffect} from "react";
import { useParams ,useNavigate,NavLink} from "react-router-dom";
import axios from "axios";
import "../Style/Dynamicpage.css"
import AddFooter from "./Footer";
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"
function Dynamicpage(){
    const {id} = useParams();
    const [moredetails,setMoreDetails] =useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
            axios.get('https://new-ecommerce-backend-m62a.onrender.com/api/getdatafromproductstore')
            .then((res)=>setMoreDetails(res.data))
            .catch((err)=>console.log(err))

    },[id] );
    return(
        <>
            {moredetails.filter((item)=> item.id===id).map((item,index)=>{
                const {
                    id = item.id,
                    image = item.image,
                    price= parseInt(item.price),
                    subCategory= item.subCategory
                  }= item;
                return(
                    <div key={index}  className="dynamicParent">
                      <div className="dynamiccontainer" >
                        <div className="dynamicimgparent">
                            <img src={item.image}  alt="Not Found"/>
                        </div>
                        <div className="dynamicDescripition">
                                
                                <ul>
                                    <h2>Descripition:-</h2>
                                    <li><span>Brand:</span>{item.subCategory}</li>
                                    <li>{item.product_name}</li>
                                    <li><span>Speciality :</span>{item.Speciality}</li>
                                    <li><span>Diet Type :</span> Vegetarian</li>
                                    <li><span>Number of Items :</span> 1</li>
                                    
                                    <li><span>Rating:</span>{item.rating}</li>
                                    <li><span>Price:</span>{item.price}Rs.</li>
                                </ul>
                                
                                <div className="dynamicButtonParent">
                                    <button onClick={()=>navigate(-1)} className="goBackbtn"> Back</button>
                                    <NavLink to={`/addtocart/${item.id}`}>
                                    <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='dynamicaddtocartbtn'>Add To Cart</button> 
                                    </NavLink>
                                </div> 
                            </div>
                      </div>
                    
                    </div>
                           
                      
                )
            })}
           <AddFooter/> 
        </>
    )
}
export default Dynamicpage



// price
// 120
// product_name
// "Fortune chakki Fresh Atta ,"
// Brand
// "FORTUNE"
// Diet Type
// "Vegetarian"
// Item Weight
// "230 Grams"
// Number of Items
// 1
// Net Quantity
// "5000.0 gram"
// Speciality
// "Suitable for vegetarians"
// Package Weight
// "5.02 Kilograms"
// Item Form
// "Raw"