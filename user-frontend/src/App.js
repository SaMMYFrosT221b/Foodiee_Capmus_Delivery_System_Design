import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Items";
import Home from "./pages/Home";

function App() {
  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
        
        <Routes> 

          <Route path="/" element={ <Home/> }/>
          <Route path="/user" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
