import React from "react";
import { useState } from "react";
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
<div className="text-center">
      <h1 className="text-3xl m-3">Add New Food item</h1>
      <input className="m-3" type="text" placeholder="Food Name" onChange={handleChange} name="title"></input>
      <input className="m-3" type="text" placeholder="Description" onChange={handleChange} name="contents"></input>

      <button className="border text-green-700 p-3" onClick={handleClick}><Link to={'/books'}>Add Food</Link></button>
    </div>
  );
}

export default Add;