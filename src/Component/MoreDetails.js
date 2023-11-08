import React,{useState,useEffect} from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";

function MoreDetails(){
    const {id} = useParams();
    const newid = parseInt(id)
    const [moredetails,setMoreDetails] = useState({})
    const [test,settest] =useState([])
    const navigate = useNavigate();
    useEffect(()=>{
            axios.get('http://localhost:5005/api/beautyproduct/')
            .then((res)=>settest(res.data))
            .catch((err)=>console.log(err))

    },[id] );
    return(
        <>
            {test.filter((item)=>item.id===newid).map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>More page</h1>
            <img src={item.image}/>
            <button onClick={()=>navigate(-1)}>Go back</button>
                    </div>
                )
            })}
            
        </>
    )
}
export default MoreDetails