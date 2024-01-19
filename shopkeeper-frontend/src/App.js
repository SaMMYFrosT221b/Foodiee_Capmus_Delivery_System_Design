import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./pages/Items";

function App() {
  return (
    <div className="textCenter flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/shopkeeper" element={<Items />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
