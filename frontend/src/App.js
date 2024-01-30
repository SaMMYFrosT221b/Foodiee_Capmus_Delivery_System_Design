import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Add from "./pages/Add";
import "./App.css";
import Signup from "./pages/SignupForm";
// import Home from "./pages/Home";
import LoginPage from "./pages/Login/LoginPage";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import React from "react";
import { useState } from "react";
import ProfilleAvatar from "./components/ProfileAvatar";

export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="textCenter flex flex-col">
      {/* <Navbar /> */}
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/home/cart" element={<Cart />} />
            <Route path="/update/:id" element={<Update />} />
            <Route
              path="/home/user/:userID/profile"
              element={<ProfilleAvatar />}
            />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
