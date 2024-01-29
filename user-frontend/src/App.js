import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import Home from "./pages/Home";

function App() {
  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
<<<<<<< HEAD
        
        <Routes> 

          <Route path="/" element={ <Home/> }/>
          <Route path="/user" element={<Items />} />
=======
        <Routes>
          <Route path="/user/:id" element={<Items />} />
>>>>>>> 4ff4e29e9e61565bd9f2d6658518910367bbbb34
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
