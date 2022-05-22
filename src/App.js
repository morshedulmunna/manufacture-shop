import React from "react";
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
    </>
  );
}

export default App;
