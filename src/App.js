import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./shared/index";
import { Home, Login, Signup } from "./pages/index";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
