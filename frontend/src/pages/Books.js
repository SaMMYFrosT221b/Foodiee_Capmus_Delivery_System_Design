import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => { 
        const fetchAllNotes = async () => {
            try{
                const res = await axios.get("http://localhost:5000/notes");
                setBooks(res.data);
                console.log(res);
            }catch(error){
                console.log(error);
            }
        }
        fetchAllNotes();
    },[]);

    const handleDelete = async (id) => {  
        try{
            const res = await axios.delete(`http://localhost:5000/notes/${id}`);
            console.log(res);
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className="Books">
      <h1>Sammy Notes Store</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.content}</p>
            <button className="delete" onClick={()=>{ handleDelete(book.id);}}>Delete</button>
            <button className="update"> <Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button className="btn"><Link to={'/add'}>Add New Notes</Link></button>
    </div>
  );
}

export default Books;