import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';
import './App.css';
import Login from './pages/Login';
import FormComponent from './pages/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<FormComponent />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
