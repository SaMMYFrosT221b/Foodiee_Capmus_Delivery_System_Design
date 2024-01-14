import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/notes");
        setBooks(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/notes/${id}`);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    navigate("/");
    console.log(
      "This is Token form local Storage:",
      localStorage.getItem("Token")
    );
  };

  React.useEffect(() => {
    const Token = localStorage.getItem("Token");
    if (!Token) {
      navigate("/");
    }else{
      navigate("/books");
    }
  }, [navigate]);

  return (
    <div className="Books text-center">
      <h1 className="text-3xl underline m-10">Sammy Foods Store</h1>
      <button className="text-2xl border p-3 text-red-500" onClick={handleLogOut}>
        {" "}
        Logout{" "}
      </button>
      <div className="books flex flex-wrap justify-center ">
        {books.map((book) => (
          <div className="book  m-5 w-[200px] border p-5" key={book.id}>
            <h3 className="m-2 text-blue-500">{book.title}</h3>
            <p className="m-2 text-green-500">{book.content}</p>
            <button
              className="delete m-3 text-red-400 border p-2"
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              Delete
            </button>
            <button className="update text-gray-500 border p-2">
              {" "}
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="btn border p-3 bg-green-400">
        <Link to={"/add"}>Add New Notes</Link>
      </button>
    </div>
  );
};

export default Books;
