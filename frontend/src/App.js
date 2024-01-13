import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Books from './pages/Books';
import Update from './pages/Update';
import Add from './pages/Add';
import './App.css';
import Signup from './pages/SignupForm';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginForm />} />
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
