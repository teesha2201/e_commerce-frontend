import React,{useState} from "react";
import "./Searchbar.css";
import { useNavigate,NavLink } from "react-router-dom";
import AddFooter from '../Component/Footer';
import {useDispatch} from "react-redux";
import {addtoCart} from "../Redux/Slice"

const Searchbar = ()=>{
    const [search,setSearch] = useState("");
    const [searchResult,setSearchresult] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const token = localStorage.getItem('token');

    const handleChange = (event) =>{
        setSearch(event.target.value);
    };

    const handleSumbit = async () =>{
        
            const response = await fetch(`http://localhost:5005/api/search/${search}`,)
            const data = await response.json();
            setSearchresult(data);
            // navigate("/search");
            setSearch('');
        
    };

    return(
        <div >
           <div className="searchBar_parent">
                <button onClick={()=>navigate(-1)} className="searchbarButton"><i class="fa-solid fa-arrow-left"></i></button>
                <input type="text" value={search} onChange={handleChange} placeholder="search here product..." className="searchinput" />
                <button onClick={handleSumbit} className="searchbarButton"><i class="fa-solid fa-magnifying-glass"></i></button>
           </div>
          
           <div className="SearchCartContainer">
            <div className="SearchsuperContainer">
                        {searchResult.map((item,index)=>{
                            const {
                                id = item.id,
                                image = item.image,
                                price= parseInt(item.price),
                                // Brand = item.Number_of_Items
                                }= item;
                                return(
                                <>
                                    <div className="SearchresultCard">
                                        <div className="imageParent">
                                            <NavLink to={`/moreDetails/${item.id}`}>
                                                <img src={item.image}  alt="Not Found"/>
                                            </NavLink> 
                                        
                                        </div>
                                        <br></br>
                                        <div className="searchtext-wrapper">
                                        <hr></hr>
                                            <span className="ProductName" >product Name: {item.product_name.slice(0,12)}</span>
                                            <h3>Price:{item.price}Rs</h3>
                                            <div className="searchbtn-wrapper">
                                                <NavLink to={`/addtocart/${item.id}`}>
                                                    <button onClick={()=>dispatch(addtoCart({id,image,price}))} className='searchaddtocartbtn'>Add To cart</button>
                                                </NavLink>
                                            
                                                <button onClick={()=>{}} className="searchBuyitembtn">Buy now</button>
                                            </div>
                                        </div> 
                                    </div>
                                </>
                            )
                            })
                        }         
                
                </div> 
            </div>    
           
            <AddFooter/>
        </div>
        
    )
}
export default Searchbar



























// const Searchbar = ()=>{
//     const [search,setsearch] = useState("");
//     const userid = localStorage.getItem("id"); 
//     const data = useSelector((state) => state.Cart.cart);
//     const filteredItems = data.filter((item) => item.id === userid)
//     const auth = localStorage.getItem("token");
//     const [getItem,setgetItem] = useState([]);

//     useEffect(()=>{
//         if(search==="")
//         {
//             setgetItem([]);
//             return;
//         }
//         const cart = {
//             searchitem:search
//         }

//         axios.post("https://new-ecommerce-backend-m62a.onrender.com/api/search",search)
//         .then((response)=>{
//             setgetItem(response.data);

//             console.log(response.search.data);
//         })
//         .catch((err)=>{
//             console.log("Error occured:",err)
//         })
//     },[search])

//     const handleChange =(e) =>{
//         setsearch(e.target.value);
//     }
//     const handleSumbit = (e)=>{
//         e.preventDefault()
//     }
//     const handleClick = ()=>{
//         setsearch("");
//     }
   
//     return(
//         <>
//             {/* <form> */}
            
//                 <div className="searchinput">
//                     <input type="text" placeholder="search items here..." className="searchBar" 
//                         value={search} onChange={handleChange}
//                     />
//                     <button  className="searchbarButton">🔎</button>
//                 </div>

//                 <div className="searchlist">
//                 {Array.isArray(getItem) && getItem.length > 0 ? (
//                     <ul>
//                         {getItem.map((item, index) => (
//                             <NavLink
//                             to={ item.id + "/" + item.category}
//                             onClick={handleClick}
//                             >
//                             <li key={index}>{item.product_name}</li>
//                             </NavLink>
//                         ))}
//                     </ul>
//                     ): null}
//                 </div>

//             {/* </form> */}
            
//         </>
//     )
// }
// export default Searchbar