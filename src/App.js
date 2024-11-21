import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Header/Navbar';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AuthLayout from './layout/auth';
import MainLayout from './layout/main';
import CategoriesPage from './pages/Category';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
      <Route
          path="/auth/*"
          element={
            <AuthLayout>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </AuthLayout>
          }
        />
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="categories" element={<CategoriesPage/>}/>
                <Route path="about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MainLayout>
          }
        />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
