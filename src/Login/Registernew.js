import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "../Style/Register.css"

function RegisterNew() {

  const navi = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    });
    
  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {
  
    e.preventDefault();
    console.log(data);
    if(data.name.length===0 ){
      
      alert("Name field must have max 24 characters long");
      navi('/register')
      }
      else if( data.email.length<=0 || data.email.length>30){
        alert("email field must have min 12 and max 30 characters long");
        navi('/register');

        if(data.password.length<=0 || data.password.length>12){
          alert("password field must have min 6 and max 12 characters long");
          navi('/register')

          if(data.phoneNo.length<=0 || data.phoneNo.length>=11){
            alert("phoneNo. must have 10characters long");
            navi('/register')
          }

        }
      }
    else if(data.email.length===0 || data.email.length>30){
      alert("Name field must have max 24 characters long");
      navi('/register')

      if(data.password.length<=0 || data.password.length>12){
        alert("password field must have min 6 and max 12 characters long");
        navi('/register')

        if(data.phoneNo.length<=0 || data.phoneNo.length>=11){
          alert("phoneNo. must have 10characters long");
          navi('/register')
        }

      }
    }
    else if(data.password.length<=0 || data.password.length>12){
      alert("password field must have min 6 and max 12 characters long");
      navi('/register')
       
      if(data.phoneNo.length<=0 || data.phoneNo.length>11){
        alert("phoneNo. must have 10characters long");
        navi('/register')
      }

    }
    else if(data.phoneNo.length<=0 || data.phoneNo.length>=11){
      alert("phoneNo. must have 10characters long");
      navi('/register')
    }
   
    await axios
        .post("http://localhost:5005/api/register", data)
        .then((res) => {
          alert(res.data.msg);
          setData(res.data);
          localStorage.setItem("token", res.data.token);
          console.log(res.data.token)
          
          if(res.data.msg ==="user already registered with this email")
            {
                navi('/register')
            }
          else if(res.data.token){
            
            navi("/login");
          }
        
        })
    
      .catch((err) => console.log(err));

    setData({
      name: "",
      email: "",
      password: "",
      phoneNo: "",
    });
 
}

  return (
    <>
      <div className="registerParent">
      <form className="registerForm" onSubmit={handleSubmit}>
        <br/>
        <h1 className="heading">WelCome to Register Page</h1>
        <br/>
        <label id="name" htmlFor="name"> Name:</label>
        <input type="text"  name="name"  id="name"  onChange={handleChange}  value={data.name} required/>
        <br />
        <br />
        <label id="email" htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required/>
        <br />
        <br />
        <label id="password" htmlFor="Password">Set Password:</label>
        <input type="password" maxLength="8" name="password" id="Password" onChange={handleChange} value={data.password} required/>
        <br />
        <br />
        <label id="phoneNo" htmlFor="phoneNo"> Phone.No:</label>
        <input type="number" max="10" name="phoneNo" id="phoneNo" onChange={handleChange} value={data.phoneNo} required/>
        <br />
        <br />
        <button className="Submitbutton" onClick={handleSubmit}>
          submit
        </button>
        <br/>
        <div className="or">If Already have an Account </div>
        <br/>
        <NavLink to="/login" className="nextpage">
          Go To Login Page
        </NavLink>
        <br/>
        </form>
      </div>
      
    </>
  );
}

export default RegisterNew;



