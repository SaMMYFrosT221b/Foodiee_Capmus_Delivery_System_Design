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

export const CartContext = React.createContext();
let list = localStorage.getItem("cartItems");
let jsonString = [];
if (list !== null) {
  jsonString = JSON.parse(list);
}

// function YourComponent() {
//   let { id } = useParams();
//   return <h1>This is the shopID: {id} </h1>;
// }

function App() {
  const [cartItems, setCartItems] = useState(jsonString);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
        <CartContext.Provider
          value={{ cartItems, setCartItems, cartNumber, setCartNumber }}
        >
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/foodiee-home" element={<FoodieeHome />} />
            {/* <Route path="/foodiee-home/items" element={<FoodieeHomeItems />} /> */}
            <Route
              path="/foodiee-home/items/:id"
              element={<FoodieeHomeItems />}
            />
            <Route path="/foodiee-home/cart" element={<CartItemTailWind />} />
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
