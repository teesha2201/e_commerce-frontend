import React,{useEffect,useState} from 'react'
import axios from "axios";
import { Outlet } from 'react-router-dom';
const All = () => {
  const [all,setAll] = useState([])
    useEffect(()=>{
        // axios.get("http://localhost:5005/api/all")
        // .then(All =>{setAll(All.data);console.log(All.data)})
        // .catch(err => console.log(err))
        // },[])
        async function apiFun(){
          const fetchdata = await fetch("http://localhost:5005/api/all")
          const res = await fetchdata.json();
          console.log(res);
          // console.log(res[2].productDetail[3]);
          setAll(res);
           }
           apiFun();
       },[])

  return (
    <>
    <div>
      <h1>All</h1>
    </div>
    <Outlet/>
    </>
  )
}

export default All
