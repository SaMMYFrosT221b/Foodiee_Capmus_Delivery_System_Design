import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Add from "./pages/Add";
import "./App.css";
import Signup from "./pages/SignupForm";
import Home from "./pages/Home";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
