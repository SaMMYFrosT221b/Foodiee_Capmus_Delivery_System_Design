import React from "react"  ;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";

function Login() {
  const [book, setBook] = useState({  UserName: "", Password: "" });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setBook((prev)=>({...book, [e.target.name]: e.target.value}));
  }

  const handleClick = async () =>{  
    try{    
      console.log("Books ", book);
      const res = await axios.post("http://localhost:5000/login", book);
      console.log("This response is from frontend",res);
      console.log("Length of the response is ", Object.keys(res.data).length);
      if(res.length == 0){
        console.log("Login Failed");
        navigate("/login");

      }else{
        console.log("Login Successful");
        navigate("/books");

      }
    }catch(error){
      console.log(error);
    }
  }
    
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="UserName"></input>
      <input type="text" placeholder="conetnts" onChange={handleChange} name="Password"></input>

      <button className="loginButton" onClick={handleClick}><Link to={'/books'}>Logon</Link></button>
    </div>
  );
}

export default Login;