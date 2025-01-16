import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/projects";
import Header from "./Components/Header";
import Footer  from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
