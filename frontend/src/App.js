import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/SignupForm";
import LoginPage from "./pages/Login/LoginPage";

import React from "react";
import { useState } from "react";
import ProfilleAvatar from "./components/ProfileAvatar";
import FoodieeHome from "./components/FoodieeHome";
import FoodieeHomeItems from "./components/FoodieeHomeItems";
import CartItemTailWind from "./components/CartTailwind";
import SearchFeature from "./components/SearchBar/SearchingBar";

export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
        <CartContext.Provider
          value={[cartItems, setCartItems, cartNumber, setCartNumber]}
        >
          <Routes>
            <Route path="/" element={<FoodieeHome />} />
            <Route path="/foodiee-home" element={<FoodieeHome />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<Signup />} />
            {/* <Route path="/foodiee-home/items" element={<FoodieeHomeItems />} /> */}
            <Route
              path="/foodiee-home/items/:id"
              element={<FoodieeHomeItems />}
            />
            <Route path="/foodiee-home/cart" element={<CartItemTailWind />} />
            <Route path="/search" element={<SearchFeature />} />

            <Route
              path="/foodiee-home/user/:userID/profile"
              element={<ProfilleAvatar />}
            />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
