import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../App.css';

const Update = () => {
  const [book, setBook] = useState({  title: "", contents: "" });

  const navigate = useNavigate();
  const location  = useLocation();

  const bookId = (location.pathname.split("/")[2]);

  const handleChange = (e) =>{
    setBook((prev)=>({...book, [e.target.name]: e.target.value}));
  }

  const handleClick = async () =>{  
    try{    
      console.log("Books ", book);
      const res = await axios.put("http://localhost:5000/notes/"+bookId, book);
      console.log(res);
      navigate("/books");
    }catch(error){
      console.log(error);
    }
  }
  
  return (
<div className="form">
      <h1>Update Your Note</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
      <input type="text" placeholder="conetnts" onChange={handleChange} name="contents"></input>

      <button className="btn" onClick={handleClick}><Link to={'/books'}>Update</Link></button>
    </div>
  );
}

export default Update;