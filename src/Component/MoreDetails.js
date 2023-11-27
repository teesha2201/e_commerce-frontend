
import React,{useState,useEffect} from "react";
import { useParams ,useNavigate,NavLink} from "react-router-dom";
import axios from "axios";
import "../Style/MoreDetails.css"
import AddFooter from "./Footer";
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice";
function MoreDetails(){
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
                    <div key={index}  className="moredetailsParent">
                      <div className="moredetailscontainer" >
                        <div className="moredetailsimgparent">
                            <img src={item.image}  alt="Not Found"/>
                        </div>
                        <div className="moredetailsDescripition">
                                
                                <ul>
                                    <h2>Descripition:-</h2>
                                    <li><span>Brand :</span>{item.subCategory}</li>
                                    <li>{item.product_name}</li>
                                    <li>{item.key1}</li>
                                    <li>{item.key2}</li>
                                    <li>{item.key3}</li>
                                    <li>{item.key4}</li>
                                    <li><span>Rating:</span>{item.rating}</li>
                                    <h3><span>Price:</span>{item.price}Rs.</h3>
                                </ul>
                                
                                <div className="moredetailsButtonParent">
                                    <button onClick={()=>navigate(-1)} className="goBackbtn">Back </button>
                                    <NavLink to={`/addtocart/${item.id}`}>
                                    <button onClick={()=>dispatch(addtoCart({id,image,price,subCategory}))} className='moredetailsaddtocartbtn'>Add To Cart</button> 
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

export default MoreDetails