import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
