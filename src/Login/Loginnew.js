import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function LoginNew() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://new-ecommerce-backend-m62a.onrender.com/api/login", data,{headers:{"authorization":`Bearer${token}`}})
    .then((res) => {
        alert(res.data.msg);
        setData(res.data);
        // localStorage.setItem("token", res.data.token);
        localStorage.setItem("token",res.data.token);
        // localStorage.getItem("name",res.data.name);
        if(res.data.msg==="email wrong"){
          alert(res.data.msg)
          navigate('/login');
        }
        
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setData({
        email: "",
        password: "",
      });
  };

  return (
    <div className="loginParent">
      
      <form className="loginForm" onSubmit={handleSubmit}>
       <br/>
      <h1 className="heading"> WelCome to LogIn Page</h1>
      <br/>
      <br/>
        <label htmlFor="useremail">
          Email:
        </label>
        <input className="text"
          type="email"
          name="email"
          id="useremail"
          onChange={handleChange}
          value={data.email}
          placeholder='enter your name'/>
        <br />
        <br />
        <label  htmlFor="password">
          Password:
        </label>
        <input
          className="text1"
          type="password"
          maxLength="8"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
          placeholder='create your password'
        />
        <br />
        <br />
        <button className="Submitbutton" type="submit">
          Submit
        </button>
        <br/>
        <div className="or">OR</div>
        <br/>
          <NavLink to="/register" className="nextpage">
            If not Register then please click on this signUp Link
          </NavLink>
        <br/>
      </form>
     
    </div>
  );
}

export default LoginNew;

