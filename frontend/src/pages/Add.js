import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({  title: "", contents: "" });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setBook((prev)=>({...book, [e.target.name]: e.target.value}));
  }

  const handleClick = async () =>{  
    try{    
      console.log("Books ", book);
      const res = await axios.post("http://localhost:5000/notes", book);
      console.log(res);
      navigate("/books");
    }catch(error){
      console.log(error);
    }
  }
  return (
<div className="form">
      <h1>Add New Book</h1>
      <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
      <input type="text" placeholder="conetnts" onChange={handleChange} name="contents"></input>

      <button className="btn" onClick={handleClick}><Link to={'/books'}>Add Note</Link></button>
    </div>
  );
}

export default Add;