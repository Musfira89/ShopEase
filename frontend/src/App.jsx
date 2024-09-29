import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/Auth/Signup";
// import Hero from "./components/Home/Hero Section/Hero";
import './index.css';
import Hero from "./components/Home/Hero Section/Hero";
import Cards from "./components/Home/cards/Cards";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/hero" element={<Hero />} /> 
        <Route path="/cards" element={<Cards />} /> 

        {/* <Route path='/hero' element={<Hero />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
